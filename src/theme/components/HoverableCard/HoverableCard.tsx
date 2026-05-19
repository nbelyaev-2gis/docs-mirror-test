import { memo, PropsWithChildren } from 'react';
import { Icon } from '@shared/icons';
import s from './HoverableCard.module.css';
import { cn } from '@shared/utils/css/cn';

export const HoverableCard = memo<PropsWithChildren<{ className?: string }>>(
  ({ children, className }) => {
    return (
      <div className={cn(s.wrapper, className)}>
        <Icon size={24} name="arrowUpRight" className={s.hoverIcon} />
        {children}
      </div>
    );
  },
);
HoverableCard.displayName = 'HoverableCard';
