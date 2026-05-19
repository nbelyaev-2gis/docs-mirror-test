import React, { memo } from 'react';
import s from './separatedList.module.css';

interface SeparatedListProps {
  /**
   * Элементы списка
   */
  children: React.ReactNode[];
  /**
   * Символ разделителя
   */
  separator?: string;
}

export const SeparatedList = memo(({ children, separator = '|' }: SeparatedListProps) => {
  if (children.length < 2) return children;

  return children.map((child, index) => {
    if (index === children.length - 1) return child;

    return (
      <React.Fragment key={index}>
        {child}
        <span className={s.separator}>{separator}</span>
      </React.Fragment>
    );
  });
});

SeparatedList.displayName = 'SeparatedList';
