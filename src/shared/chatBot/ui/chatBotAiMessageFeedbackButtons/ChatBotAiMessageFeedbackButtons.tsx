import { memo } from 'react';
import { ChatBotAiMessageLikeButton } from './ChatBotAiMessageLikeButton';
import { ChatBotAiMessageDislikeButton } from './ChatBotAiMessageDislikeButton';
import { useChatBotStore } from '../../model/store';
import s from './chatBotAiMessageFeedbackButtons.module.css';

type Props = {
  messageId: number;
};

export const ChatBotAiMessageFeedbackButtons = memo<Props>(({ messageId }) => {
  const likedMessages = useChatBotStore((s) => s.likedMessages);
  const dislikedMessages = useChatBotStore((s) => s.dislikedMessages);

  return (
    <div className={s.buttons}>
      <ChatBotAiMessageLikeButton
        messageId={messageId}
        isActive={likedMessages.includes(messageId)}
      />
      <ChatBotAiMessageDislikeButton
        messageId={messageId}
        isActive={dislikedMessages.includes(messageId)}
      />
    </div>
  );
});
ChatBotAiMessageFeedbackButtons.displayName = 'ChatBotAiMessageFeedbackButtons';
