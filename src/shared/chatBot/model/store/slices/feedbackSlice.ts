import { StateCreator } from 'zustand';
import { DialogSlice } from './dialogSlice';
import { rateAnswer, Params as RateAnswerParams } from '../../../api/rateAnswer';

type Feedback = 'like' | 'dislike' | 'dislikeComment';

type GiveFeedbackParams = Omit<RateAnswerParams, 'threadId' | 'score'> & {
  type: Feedback;
};

export type FeedbackSlice = {
  setFeedbackFormMessageId: (id: number) => void;
  closeFeedbackForm: () => void;

  likedMessages: number[];
  dislikedMessages: number[];
  giveFeedback: (params: GiveFeedbackParams) => Promise<void>;
};

export const createFeedbackSlice: StateCreator<
  FeedbackSlice & DialogSlice,
  [],
  [],
  FeedbackSlice
> = (set, get) => {
  let feedbackAbortController: AbortController | undefined;

  return {
    feedbackFormMessageId: undefined,
    setFeedbackFormMessageId: (id) =>
      set({ status: { value: 'feedbackFormOpen', payload: { messageId: id } } }),
    closeFeedbackForm: () => set({ status: { value: 'idle' } }),

    likedMessages: [],
    dislikedMessages: [],
    giveFeedback: async ({ messageId, type, comment, feedback }) => {
      let { threadId, likedMessages, dislikedMessages } = get();
      if (!threadId) return;

      let isIncluded = false;
      if (type === 'like') {
        isIncluded = likedMessages.includes(messageId);
        likedMessages = isIncluded
          ? likedMessages.filter((id) => id !== messageId)
          : [...likedMessages, messageId];
        dislikedMessages = dislikedMessages.filter((id) => id !== messageId);
      } else if (type === 'dislike') {
        isIncluded = dislikedMessages.includes(messageId);
        dislikedMessages = isIncluded
          ? dislikedMessages.filter((id) => id !== messageId)
          : [...dislikedMessages, messageId];
        likedMessages = likedMessages.filter((id) => id !== messageId);
      }

      set((prev) => ({
        // В первую очередь обновляем рантайм состояние. Считай, optimistic update
        likedMessages,
        dislikedMessages,
        // Открываем или закрываем форму обратной связи на дизлайк
        status:
          type === 'dislike' && !isIncluded
            ? { value: 'feedbackFormOpen', payload: { messageId } }
            : prev.status,
      }));

      // Не отсылаем повторный запрос, если юзер отжал кнопку лайка/дизлайка.
      // Считаем, что это нечастотный кейс, и скорее всего он мискликнул.
      if (isIncluded) return;

      // Стопарим одновременные запросы
      feedbackAbortController?.abort();
      feedbackAbortController = new AbortController();

      try {
        await rateAnswer(
          { threadId, messageId, score: type === 'like' ? 1 : 0, comment, feedback },
          { signal: feedbackAbortController.signal },
        );
      } catch {
        // Ничего не делаем
      } finally {
        feedbackAbortController = undefined;
      }
    },
  };
};
