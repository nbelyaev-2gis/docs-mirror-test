import React, { memo } from 'react';
import s from './Description.module.css';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import CodeBlock from '@theme/CodeBlock';
import { cn, getMarkdownLanguageFromClass } from '@shared/utils';

interface Props {
  children: string;
  className?: string;
}

export const Description = memo<Props>(({ children, className }) => {
  return (
    <div className={cn(s.wrapper, className)}>
      <Markdown
        rehypePlugins={[rehypeRaw]} // нужен для рендера html кода, например в описаниях andoroid
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const language = getMarkdownLanguageFromClass(className || '');

            return language ? (
              <CodeBlock language={language} metastring={'showLineNumbers'} className={className}>
                {children}
              </CodeBlock>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  );
});

Description.displayName = 'Description';
