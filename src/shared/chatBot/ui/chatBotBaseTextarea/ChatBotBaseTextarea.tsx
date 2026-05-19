import { memo, forwardRef, HTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@shared/utils';
import s from './chatBotBaseTextarea.module.css';

type Props = HTMLAttributes<HTMLTextAreaElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const ChatBotBaseTextarea = memo(
  forwardRef<HTMLTextAreaElement, Props>(({ className, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(s.base, className)}
        placeholder=""
        autoComplete="off"
        {...rest}
      />
    );
  }),
);
ChatBotBaseTextarea.displayName = 'ChatBotBaseTextarea';
