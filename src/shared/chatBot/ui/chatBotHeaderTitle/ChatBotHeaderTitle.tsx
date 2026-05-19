import { memo } from 'react';
import Translate from '@docusaurus/Translate';
import s from './chatBotHeaderTitle.module.css';

export const ChatBotHeaderTitle = memo(() => {
  return (
    <p className={s.heading}>
      <Translate>AI-ассистент</Translate>
      <span className={s.betaBadge}>beta</span>
    </p>
  );
});
ChatBotHeaderTitle.displayName = 'ChatBotHeaderTitle';
