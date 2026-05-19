import { memo, useMemo, HTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';
import CodeBlock from '@theme/CodeBlock';
import { cn, getMarkdownLanguageFromClass } from '@shared/utils';
import s from './chatBotCode.module.css';

type Props = HTMLAttributes<HTMLElement> & ExtraProps;

export const ChatBotCode = memo<Props>(({ children, className, node, ...rest }) => {
  const language = useMemo(() => getMarkdownLanguageFromClass(className || ''), [className]);

  return language ? (
    <CodeBlock
      language={language}
      metastring="showLineNumbers"
      className={cn(className, s.wrapper)}
    >
      {children}
    </CodeBlock>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
});
ChatBotCode.displayName = 'ChatBotCode';
