import { StateCreator } from 'zustand';
import { DialogSlice } from './dialogSlice';

export type UISlice = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  isMaximized: boolean;
  toggleIsMaximized: () => void;
};

export const createUISlice: StateCreator<UISlice & DialogSlice, [], [], UISlice> = (set) => ({
  isOpen: false,
  setIsOpen: (isOpen) =>
    set((s) => {
      let { lastReadMessageId } = s;

      // Открытие чата == прочитал сообщения
      if (isOpen) {
        const lastAiMessage = s.messages.findLast((msg) => msg.author === 'assistant');
        if (lastAiMessage) {
          lastReadMessageId = lastAiMessage.id;
        }
      }

      return { isOpen, lastReadMessageId };
    }),

  isMaximized: false,
  toggleIsMaximized: () => set((s) => ({ isMaximized: !s.isMaximized })),
});
