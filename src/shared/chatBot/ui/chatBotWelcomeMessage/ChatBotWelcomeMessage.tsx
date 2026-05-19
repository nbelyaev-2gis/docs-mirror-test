import { memo } from 'react';
import { translate } from '@docusaurus/Translate';
import { ChatBotAiMessage } from '../chatBotAiMessage/ChatBotAiMessage';

export const ChatBotWelcomeMessage = memo(() => {
  return (
    <ChatBotAiMessage messageId={undefined}>
      {translate({
        message:
          'Здравствуйте! Выберите вопрос или напишите его.\n\nAI-ассистент находится в разработке, и ответы могут содержать неточности. Ваша обратная связь поможет улучшить работу сервиса.',
      })}
    </ChatBotAiMessage>
  );
});
ChatBotWelcomeMessage.displayName = 'ChatBotWelcomeMessage';
