import { memo } from 'react';
import { ChatBotAiMessageCopyButton } from './ChatBotAiMessageCopyButton';
import { ChatBotAiMessageFeedbackButtons } from '../chatBotAiMessageFeedbackButtons/ChatBotAiMessageFeedbackButtons';
import s from './chatBotAiMessageButtons.module.css';

type Props = {
  messageId: number;
  message: string;
};

export const ChatBotAiMessageButtons = memo<Props>(({ message, messageId }) => {
  return (
    <div className={s.wrapper}>
      <ChatBotAiMessageCopyButton text={message} />
      <ChatBotAiMessageFeedbackButtons messageId={messageId} />
    </div>
  );
});
ChatBotAiMessageButtons.displayName = 'ChatBotAiMessageButtons';
