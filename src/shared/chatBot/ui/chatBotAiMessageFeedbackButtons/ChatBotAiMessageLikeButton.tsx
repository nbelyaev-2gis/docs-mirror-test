import { memo, useCallback } from 'react';
import { translate } from '@docusaurus/Translate';
import { ChatBotIconButton } from '../chatBotIconButton/ChatBotIconButton';
import { useChatBotToast } from '../chatBotToast';
import { useChatBotStore } from '../../model/store';
import { useTrackGAEvent } from '@shared/analytics';
import s from './chatBotAiMessageFeedbackButtons.module.css';

type Props = {
  messageId: number;
  isActive: boolean;
};

export const ChatBotAiMessageLikeButton = memo<Props>(({ messageId, isActive }) => {
  const giveFeedback = useChatBotStore((s) => s.giveFeedback);

  const trackClick = useTrackGAEvent('chat_bot_like_click');

  const toast = useChatBotToast();

  const handleClick = useCallback(() => {
    if (!isActive) {
      toast({ text: translate({ message: 'Спасибо за оценку' }) });
    }

    giveFeedback({ messageId, type: 'like' });
    trackClick();
  }, [isActive, toast, giveFeedback, messageId, trackClick]);

  return (
    <ChatBotIconButton
      icon="like"
      onClick={handleClick}
      className={isActive ? s.buttonActive : undefined}
    />
  );
});
ChatBotAiMessageLikeButton.displayName = 'ChatBotAiMessageLikeButton';
