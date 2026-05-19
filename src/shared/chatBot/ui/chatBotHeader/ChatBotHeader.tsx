import { memo } from 'react';
import { ChatBotNewChatButton } from '../chatBotHeaderButtons/ChatBotNewChatButton';
import { ChatBotMaximizeButton } from '../chatBotHeaderButtons/ChatBotMaximizeButton';
import { ChatBotCloseButton } from '../chatBotHeaderButtons/ChatBotCloseButton';
import { ChatBotHeaderTitle } from '../chatBotHeaderTitle/ChatBotHeaderTitle';
import s from './chatBotHeader.module.css';

export const ChatBotHeader = memo(() => {
  return (
    <div className={s.header}>
      <ChatBotNewChatButton />
      <ChatBotHeaderTitle />
      <ChatBotMaximizeButton />
      <ChatBotCloseButton />
    </div>
  );
});
ChatBotHeader.displayName = 'ChatBotHeader';
