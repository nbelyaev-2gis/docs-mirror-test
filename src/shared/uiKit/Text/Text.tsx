import { PropsWithChildren, memo, HTMLAttributes } from 'react';
import { cn } from '@shared/utils';
import s from './Text.module.css';

export type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  type?: keyof typeof s;
  textAlign?: 'start' | 'end' | 'center' | 'justify';
} & HTMLAttributes<HTMLParagraphElement>;

/**
@deprecated Дизайн компонента не согласован. На данный момент его использовать не нужно.
**/
export const Text = memo<PropsWithChildren<TextProps>>(
  ({
    children,
    as: HtmlTag = 'p',
    type = 'text-bodyRegular',
    textAlign = 'start',
    className,
    ...rest
  }) => {
    return (
      <HtmlTag className={cn(s[type], s[`text-${textAlign}`], className)} {...rest}>
        {children}
      </HtmlTag>
    );
  },
);

Text.displayName = 'Text';
