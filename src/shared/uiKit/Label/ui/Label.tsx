import { forwardRef, LabelHTMLAttributes } from 'react';
import { cn } from '@shared/utils';
import s from './Label.module.css';

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn(s.label, className)} {...props} />
  ),
);
Label.displayName = 'Label';
