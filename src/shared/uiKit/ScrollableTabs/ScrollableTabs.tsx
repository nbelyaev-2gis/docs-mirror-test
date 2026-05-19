import { useCallback, type ReactNode } from 'react';
import { cn } from '@shared/utils';
import s from './ScrollableTabs.module.css';

export type ScrollableTabItem = {
  id: string;
  label: string;
  icon?: ReactNode;
};

interface ScrollableTabsProps {
  items: readonly ScrollableTabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function ScrollableTabs({ items, activeId, onChange, className }: ScrollableTabsProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const id = e.currentTarget.value;
      if (!id) return;

      onChange(id);

      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    },
    [onChange],
  );

  return (
    <div className={s.viewport}>
      <div className={cn(s.container, className)}>
        {items.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            value={id}
            className={cn(s.tab, id === activeId && s.tabActive)}
            onClick={handleClick}
          >
            {icon && <span className={s.icon}>{icon}</span>}
            <span className={s.label}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
