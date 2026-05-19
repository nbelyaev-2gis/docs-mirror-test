import { StateCreator } from 'zustand';
import { v4 } from 'uuid';
import { FeedbackSlice } from './feedbackSlice';
import { UISlice } from './uiSlice';
import { ChatBotMessage } from '../../../types/ui';
import { getHistory } from '../../../api/getHistory';
import { getCompletion } from '../../../api/getCompletion';
import { ChatBotStatus } from '../chatBotStatus';
import { isRequestCanceledError } from '../../../lib/isRequestCanceledError';

export type DialogSlice = {
  status: ChatBotStatus;

  threadId: string | undefined;
  setNewThreadId: () => void;

  messages: ChatBotMessage[];
  sendMessage: (text: string) => Promise<void>;
  resendMessage: () => Promise<void>;

  fetchHistory: () => Promise<void>;

  lastReadMessageId: ChatBotMessage['id'] | undefined;
};

export const createDialogSlice: StateCreator<
  DialogSlice & FeedbackSlice & UISlice,
  [],
  [],
  DialogSlice
> = (set, get) => {
  let chatAbortController = new AbortController();

  return {
    status: { value: 'idle' },
    threadId: undefined,
    setNewThreadId: () => {
      chatAbortController.abort();
      chatAbortController = new AbortController();

      set({
        threadId: v4(),
        // Сброс истории при создании нового чата
        messages: [],
        likedMessages: [],
        dislikedMessages: [],
        status: { value: 'idle' },
        lastReadMessageId: undefined,
      });
    },

    messages: [],
    sendMessage: async (text) => {
      set((s) => ({
        messages: [
          ...s.messages,
          {
            id: v4(),
            author: 'user',
            content: text,
          },
        ],
      }));

      const threadId = get().threadId ?? v4();
      set({ status: { value: 'waitingForResponse' }, threadId });

      try {
        const { message_id, content } = await getCompletion(
          {
            threadId,
            message: text,
          },
          { signal: chatAbortController.signal },
        );
        set((s) => ({
          messages: [
            ...s.messages,
            {
              id: message_id,
              author: 'assistant',
              content,
            },
          ],
          status: { value: 'idle' },
          lastReadMessageId: s.isOpen ? message_id : s.lastReadMessageId,
        }));
      } catch (e) {
        if (isRequestCanceledError(e)) return;

        set({ status: { value: 'sendError', payload: { text } } });
      }
    },
    resendMessage: async () => {
      const { status, threadId, messages: localMessages } = get();
      if (status.value !== 'sendError' || !threadId) return;

      set({ status: { value: 'waitingForResponse' } });

      let messages: ChatBotMessage[] | undefined;
      try {
        ({ messages } = await getHistory({ threadId }, { signal: chatAbortController.signal }));
      } catch (e) {
        if (isRequestCanceledError(e)) return;

        /** Ничего не делаем, ошибка всё так же отображается */
      }

      const lastMessage = messages?.[messages.length - 1];
      const lastLocalAiMessage = localMessages.findLast((m) => m.author === 'assistant');
      const didAiAlreadyRespond =
        lastMessage?.author === 'assistant' && lastMessage.id !== lastLocalAiMessage?.id;

      // Считаем, что сообщение пользователя не дошло, и нужно его переотправить.
      if (
        messages &&
        (!lastMessage || (lastMessage.author === 'assistant' && !didAiAlreadyRespond))
      ) {
        try {
          const { message_id, content } = await getCompletion(
            {
              threadId,
              message: status.payload.text,
            },
            { signal: chatAbortController.signal },
          );

          set((s) => ({
            messages: [
              ...localMessages,
              {
                id: message_id,
                content,
                author: 'assistant',
              },
            ],
            status: { value: 'idle' },
            lastReadMessageId: s.isOpen ? message_id : s.lastReadMessageId,
          }));
        } catch (e) {
          if (isRequestCanceledError(e)) return;

          /** Ничего не делаем, ошибка всё так же отображается */
          set({ status });
        }
      } else if (messages && didAiAlreadyRespond) {
        // Бот уже ответил к моменту нажатия "попробовать снова" пользователем
        set({ messages, status: { value: 'idle' } });
      } else {
        set({ status });
      }
    },

    fetchHistory: async () => {
      const { threadId } = get();
      if (!threadId) return;

      set({ status: { value: 'fetchingHistory' } });
      try {
        const { messages } = await getHistory({ threadId });
        set({ messages, status: { value: 'idle' } });
      } catch (e) {
        if (isRequestCanceledError(e)) return;

        set({ status: { value: 'fetchHistoryError' } });
      }
    },

    lastReadMessageId: undefined,
  };
};
