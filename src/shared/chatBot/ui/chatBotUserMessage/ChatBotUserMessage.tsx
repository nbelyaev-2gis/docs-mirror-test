import { memo } from 'react';
import { ChatBotMessageWrapper } from '../chatBotMessageWrapper/ChatBotMessageWrapper';

type Props = {
  children: string;
};

export const ChatBotUserMessage = memo<Props>(({ children }) => {
  return <ChatBotMessageWrapper type="user">{children}</ChatBotMessageWrapper>;
});
ChatBotUserMessage.displayName = 'ChatBotUserMessage';
