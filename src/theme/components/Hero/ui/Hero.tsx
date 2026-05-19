import React, { ReactNode } from 'react';
import s from './Hero.module.css';
import { About } from './About';
import { cn } from '@shared/utils';

interface Props {
  title: ReactNode;
  description: ReactNode;
  leftBg: ReactNode;
  rightBg: ReactNode;
  withSearch?: boolean;
}

export function Hero({ title, description, leftBg, rightBg, withSearch = false }: Props) {
  return (
    <div className={s.layout}>
      <div className={cn('container', s.wrapper)}>
        <div className={s.backgroundWrapper}>
          {leftBg}
          {rightBg}
        </div>
        <About title={title} description={description} withSearch={withSearch} />
      </div>
    </div>
  );
}
