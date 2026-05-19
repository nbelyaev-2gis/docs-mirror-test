import React, { forwardRef, InputHTMLAttributes, useId, ReactNode } from 'react';
import { cn } from '@shared/utils';
import { Label } from '@shared/uiKit/Label';
import { Text } from '@shared/uiKit/Text';
import s from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  caption?: string;
  errorMessage?: string;
  requiredText?: string;
  inputAppearance?: 'default' | 'light';
  isError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      caption,
      inputAppearance = 'default',
      className,
      startIcon,
      endIcon,
      isError,
      errorMessage,
      requiredText,
      id,
      required,
      disabled,
      onChange,
      value,
      type,
      autoComplete = 'off',
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const showRequiredText = required && requiredText && !value;

    return (
      <div className={cn(s.inputRoot, className)}>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <div
          className={cn(
            s.inputWrapper,
            s[inputAppearance],
            isError && s.error,
            startIcon && s.hasStartIcon,
            (requiredText || endIcon) && s.hasRequiredTextOrEndIcon,
          )}
        >
          {startIcon && <div className={cn(s.startIcon, disabled && s.disabled)}>{startIcon}</div>}
          <input
            ref={ref}
            id={inputId}
            className={cn(s.inputField, disabled && s.disabled)}
            required={required}
            disabled={disabled}
            value={value}
            type={type}
            onChange={onChange}
            autoComplete={autoComplete}
            aria-invalid={!!isError}
            {...rest}
          />
          {(showRequiredText || endIcon) && (
            <div className={s.requiredAndEndIconBlock}>
              {showRequiredText && (
                <Text
                  type="caption1Regular"
                  as="span"
                  className={cn(s.requiredMessage, isError && s.error)}
                >
                  {requiredText}
                </Text>
              )}
              {endIcon && <div className={cn(s.endIcon, disabled && s.disabled)}>{endIcon}</div>}
            </div>
          )}
        </div>
        {errorMessage && isError && (
          <Text type="caption1Regular" className={s.errorMessage}>
            {errorMessage}
          </Text>
        )}
        {caption && (
          <Text type="caption1Regular" className={cn(s.caption, errorMessage && s.hasErrorMessage)}>
            {caption}
          </Text>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
