import { memo } from 'react';
import { translate } from '@docusaurus/Translate';
import { ChatBotError } from './ChatBotError';
import { useChatBotStore } from '../../model/store';
import s from './chatBotError.module.css';

export const ChatBotMessageError = memo(() => {
  const resendMessage = useChatBotStore((s) => s.resendMessage);

  return (
    <ChatBotError
      text={translate({
        message: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
      })}
      onClick={resendMessage}
      className={s.messageError}
    />
  );
});
ChatBotMessageError.displayName = 'ChatBotMessageError';
