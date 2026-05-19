import { memo, useCallback } from 'react';
import { ChatBotIconButton } from '../chatBotIconButton/ChatBotIconButton';
import { useChatBotStore } from '../../model/store';
import { useTrackGAEvent } from '@shared/analytics';

export const ChatBotNewChatButton = memo(() => {
  const setNewThreadId = useChatBotStore((s) => s.setNewThreadId);

  const trackClick = useTrackGAEvent('chat_bot_new_chat_click');

  const handleClick = useCallback(() => {
    setNewThreadId();
    trackClick();
  }, [setNewThreadId, trackClick]);

  return <ChatBotIconButton icon="chatPlus" onClick={handleClick} />;
});
ChatBotNewChatButton.displayName = 'ChatBotNewChatButton';
