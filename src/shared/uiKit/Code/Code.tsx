import { memo } from 'react';
import { cn } from '@shared/utils';
import s from './Code.module.css';
import CodeBlock from '@theme/CodeBlock';

interface CodeProps {
  codeString: string;
  lang: string;
  isFullWidth?: true;
  maxHeight?: string;
  className?: string;
}

export const Code = memo(({ codeString, lang, isFullWidth, className }: CodeProps) => {
  return (
    <CodeBlock language={lang} className={cn(s.container, className, isFullWidth && s.fullWidth)}>
      {codeString}
    </CodeBlock>
  );
});
Code.displayName = 'Code';
