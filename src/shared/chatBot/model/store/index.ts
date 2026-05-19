import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createUISlice, UISlice } from './slices/uiSlice';
import { createDialogSlice, DialogSlice } from './slices/dialogSlice';
import { createFeedbackSlice, FeedbackSlice } from './slices/feedbackSlice';
import { isSmallDevice } from '../../lib/isSmallDevice';

type ChatBotStore = UISlice & DialogSlice & FeedbackSlice;

export const useChatBotStore = create<ChatBotStore>()(
  persist(
    (...a) => ({
      ...createUISlice(...a),
      ...createDialogSlice(...a),
      ...createFeedbackSlice(...a),
    }),
    {
      name: 'pl6_docs_chat-bot-store',
      partialize: ({
        threadId,
        isOpen,
        isMaximized,
        likedMessages,
        dislikedMessages,
        lastReadMessageId,
      }) => ({
        threadId,
        isOpen,
        isMaximized,
        likedMessages,
        dislikedMessages,
        lastReadMessageId,
      }),
      merge: (persistedStore, initialStore) => {
        return {
          ...initialStore,
          ...(persistedStore as any),
          // На небольших устройствах не сохраняем состояние открытого чата для лучшего UX
          ...(isSmallDevice() ? { isOpen: false } : undefined),
        };
      },
    },
  ),
);
