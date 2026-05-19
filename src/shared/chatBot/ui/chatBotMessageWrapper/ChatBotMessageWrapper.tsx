import { memo, PropsWithChildren } from 'react';
import { cn } from '@shared/utils';
import s from './chatBotMessageWrapper.module.css';

type Props = PropsWithChildren<{
  type: 'user' | 'ai';
}>;

export const ChatBotMessageWrapper = memo<Props>(({ children, type }) => {
  return (
    <div
      className={cn(s.wrapper, {
        [s.userMessage]: type === 'user',
        [s.aiMessage]: type === 'ai',
      })}
    >
      {children}
    </div>
  );
});
ChatBotMessageWrapper.displayName = 'ChatBotMessageWrapper';
