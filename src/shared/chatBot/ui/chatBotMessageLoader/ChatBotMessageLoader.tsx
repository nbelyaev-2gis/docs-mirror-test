import { memo } from 'react';
import { ChatBotMessageWrapper } from '../chatBotMessageWrapper/ChatBotMessageWrapper';
import s from './chatBotMessageLoader.module.css';

export const ChatBotMessageLoader = memo(() => {
  return (
    <ChatBotMessageWrapper type="ai">
      <div className={s.loader}>
        <div className={s.circle1} />
        <div className={s.circle2} />
        <div className={s.circle3} />
      </div>
    </ChatBotMessageWrapper>
  );
});
ChatBotMessageLoader.displayName = 'ChatBotMessageLoader';
