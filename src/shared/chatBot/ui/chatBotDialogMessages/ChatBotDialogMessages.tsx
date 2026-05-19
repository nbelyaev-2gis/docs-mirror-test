import { memo } from 'react';
import { ChatBotAiMessage } from '../chatBotAiMessage/ChatBotAiMessage';
import { ChatBotWelcomeMessage } from '../chatBotWelcomeMessage/ChatBotWelcomeMessage';
import { ChatBotUserMessage } from '../chatBotUserMessage/ChatBotUserMessage';
import { useChatBotStore } from '../../model/store';

export const ChatBotDialogMessages = memo(() => {
  const messages = useChatBotStore((s) => s.messages);

  return (
    <>
      <ChatBotWelcomeMessage />

      {messages.map(({ id, author, content }) => {
        if (author === 'assistant') {
          return (
            <ChatBotAiMessage messageId={id as number} key={id}>
              {content}
            </ChatBotAiMessage>
          );
        }

        return <ChatBotUserMessage key={id}>{content}</ChatBotUserMessage>;
      })}
    </>
  );
});
ChatBotDialogMessages.displayName = 'ChatBotDialogMessages';
