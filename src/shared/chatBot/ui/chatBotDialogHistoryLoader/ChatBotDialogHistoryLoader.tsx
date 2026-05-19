import { memo } from 'react';
import { Icon } from '@shared/icons';
import s from './chatBotDialogHistoryLoader.module.css';

export const ChatBotDialogHistoryLoader = memo(() => {
  return (
    <div className={s.wrapper}>
      <Icon size={32} name="loaderClassic" className={s.loader} />
    </div>
  );
});
ChatBotDialogHistoryLoader.displayName = 'ChatBotDialogHistoryLoader';
