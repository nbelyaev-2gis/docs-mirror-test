import { memo } from 'react';
import { translate } from '@docusaurus/Translate';
import { ChatBotError } from './ChatBotError';
import { useChatBotStore } from '../../model/store';

export const ChatBotHistoryError = memo(() => {
  const fetchHistory = useChatBotStore((s) => s.fetchHistory);

  return (
    <ChatBotError
      text={translate({
        message: 'При загрузке произошла ошибка. Пожалуйста, попробуйте снова.',
      })}
      onClick={fetchHistory}
    />
  );
});
ChatBotHistoryError.displayName = 'ChatBotHistoryError';
