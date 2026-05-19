import React, { memo } from 'react';
import { CodepenButton } from './components/CodepenButton';
import { JsFiddleButton } from './components/JsFiddleButton';

interface Props {
  type: 'jsfiddle' | 'codepen';
  html: string;
  className?: string;
  onClick?: () => void;
}

export const SandboxBtn = memo<Props>(({ type, html, className, onClick }) => {
  if (type === 'jsfiddle') {
    return <JsFiddleButton html={html} className={className} onClick={onClick} />;
  }

  if (type === 'codepen') {
    return <CodepenButton html={html} className={className} onClick={onClick} />;
  }

  return null;
});
SandboxBtn.displayName = 'SandboxBtn';
