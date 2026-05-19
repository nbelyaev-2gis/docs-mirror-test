import { memo } from 'react';
import { translate } from '@docusaurus/Translate';
import s from './chatBotDisclaimer.module.css';

export const ChatBotDisclaimer = memo(() => {
  return (
    <div className={s.wrapper}>
      {translate({
        message: 'AI-ассистент может ошибаться. Проверяйте важную информацию.',
      })}
    </div>
  );
});

ChatBotDisclaimer.displayName = 'ChatBotDisclaimer';
