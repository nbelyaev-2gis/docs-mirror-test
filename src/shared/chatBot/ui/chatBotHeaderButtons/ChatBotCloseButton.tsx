import { memo, useCallback } from 'react';
import { useChatBotStore } from '../../model/store';
import { ChatBotIconButton } from '../chatBotIconButton/ChatBotIconButton';
import { useTrackGAEvent } from '@shared/analytics';

export const ChatBotCloseButton = memo(() => {
  const setIsOpen = useChatBotStore((s) => s.setIsOpen);

  const trackClose = useTrackGAEvent('chat_bot_close_click');

  const handleClose = useCallback(() => {
    setIsOpen(false);
    trackClose();
  }, [setIsOpen, trackClose]);

  return <ChatBotIconButton onClick={handleClose} icon="windowControl" />;
});
ChatBotCloseButton.displayName = 'ChatBotCloseButton';
