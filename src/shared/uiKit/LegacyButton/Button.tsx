import React from 'react';
import { cn } from '@shared/utils';
import s from './button.module.css';

export const Button = ({
  children,
  ...buttonProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...buttonProps} className={cn(s.button, buttonProps.className)}>
      {children}
    </button>
  );
};
