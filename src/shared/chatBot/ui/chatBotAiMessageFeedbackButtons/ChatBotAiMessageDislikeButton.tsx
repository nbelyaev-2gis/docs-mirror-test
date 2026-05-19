import { memo, useCallback } from 'react';
import { useChatBotStore } from '../../model/store';
import { ChatBotIconButton } from '../chatBotIconButton/ChatBotIconButton';
import { useTrackGAEvent } from '@shared/analytics';
import s from './chatBotAiMessageFeedbackButtons.module.css';

type Props = {
  messageId: number;
  isActive: boolean;
};

export const ChatBotAiMessageDislikeButton = memo<Props>(({ messageId, isActive }) => {
  const giveFeedback = useChatBotStore((s) => s.giveFeedback);

  const trackClick = useTrackGAEvent('chat_bot_dislike_click');

  const handleClick = useCallback(() => {
    giveFeedback({ messageId, type: 'dislike' });
    trackClick();
  }, [giveFeedback, messageId, trackClick]);

  return (
    <ChatBotIconButton
      icon="dislike"
      onClick={handleClick}
      className={isActive ? s.buttonActive : undefined}
    />
  );
});
ChatBotAiMessageDislikeButton.displayName = 'ChatBotAiMessageDislikeButton';
