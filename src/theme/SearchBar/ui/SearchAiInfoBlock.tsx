import React, { memo, ReactNode } from 'react';
import { Icon } from '@shared/icons';
import s from './searchInfoBlock.module.css';
import { Button } from '@shared/uiKit/Button';

export type SearchInfoBlockProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const SearchAiInfoBlock = memo<SearchInfoBlockProps>(({ children, onClick }) => {
  return (
    <Button
      className={s.button}
      startIcon={<Icon name="ai" className={s.aiIcon} size={24} />}
      endIcon={<Icon name="arrowUp" className={s.arrowUpIcon} size={24} />}
      onClick={onClick}
      size={40}
      appearance="transparent"
      wide
    >
      <span className={s.text}>{children}</span>
    </Button>
  );
});

SearchAiInfoBlock.displayName = 'SearchInfoBlock';
