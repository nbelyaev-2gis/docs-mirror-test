import { memo } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChatBotCode } from './code/ChatBotCode';
import { ChatBotLink } from './link/ChatBotLink';
import { ChatBotPre } from './pre/ChatBotPre';
import s from './chatBotAiMessageContent.module.css';

type Props = {
  children: string;
};

export const ChatBotAiMessageContent = memo<Props>(({ children }) => {
  return (
    <div className={s.wrapper}>
      <Markdown
        remarkPlugins={[remarkGfm]} // Нужно для поддержки таблиц
        components={{
          a: ChatBotLink,
          code: ChatBotCode,
          pre: ChatBotPre,
        }}
      >
        {children}
      </Markdown>
    </div>
  );
});
ChatBotAiMessageContent.displayName = 'ChatBotAiMessageContent';
