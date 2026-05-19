import React, { memo, PropsWithChildren } from 'react';
import s from './typography.module.css';

export const Typography = memo(({ children }: PropsWithChildren<unknown>) => {
  return <div className={s.content}>{children}</div>;
});
Typography.displayName = 'Typography';
