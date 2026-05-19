import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import s from './Button.module.css';
import { cn } from '@shared/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 32 | 40 | 48;
  appearance: 'primary' | 'outline' | 'lightFill' | 'transparent';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  wide?: boolean;
  children?: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size, appearance, children, startIcon, endIcon, wide, disabled, asChild, ...rest },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          s.button,
          s[`appearance${appearance.charAt(0).toUpperCase() + appearance.slice(1)}`],
          s[`size${size}`],
          wide && s.wide,
          className,
        )}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        <div className={cn(s.iconContainer)}>
          {startIcon}
          {children}
          {endIcon}
        </div>
      </Comp>
    );
  },
);

Button.displayName = 'Button';
