import { memo } from 'react';
import Translate from '@docusaurus/Translate';
import { ChatBotMessageWrapper } from '../chatBotMessageWrapper/ChatBotMessageWrapper';
import { ChatBotAiMessageButtons } from '../chatBotAiMessageButtons/ChatBotAiMessageButtons';
import { ChatBotAiMessageContent } from '../chatBotAiMessageContent/ChatBotAiMessageContent';
import s from './chatBotAiMessage.module.css';

type Props = {
  children: string;
  messageId: number | undefined;
};

export const ChatBotAiMessage = memo<Props>(({ children, messageId }) => {
  return (
    <ChatBotMessageWrapper type="ai">
      <p className={s.name}>
        <Translate>AI-ассистент</Translate>
      </p>

      <ChatBotAiMessageContent>{children}</ChatBotAiMessageContent>

      {typeof messageId === 'number' && (
        <ChatBotAiMessageButtons message={children} messageId={messageId} />
      )}
    </ChatBotMessageWrapper>
  );
});
ChatBotAiMessage.displayName = 'ChatBotAiMessage';
