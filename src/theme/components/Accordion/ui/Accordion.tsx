import { type ReactNode, useState } from 'react';
import { cn } from '@shared/utils';
import { Icon } from '@shared/icons';
import s from './Accordion.module.css';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  triggerClassName?: string;
  contentClassName?: string;
  divider?: boolean;
  iconVariant?: 'plusMinus' | 'chevron';
}

export function AccordionItem({
  title,
  children,
  triggerClassName,
  contentClassName,
  divider = true,
  iconVariant = 'plusMinus',
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  let iconName: 'plus' | 'minus' | 'chevronDown' = 'plus';

  if (iconVariant === 'chevron') {
    iconName = 'chevronDown';
  } else if (open) {
    iconName = 'minus';
  }

  return (
    <div className={cn(s.item, open && s.itemOpen)}>
      <button
        type="button"
        className={cn(s.trigger, triggerClassName)}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={s.title}>{title}</span>
        <Icon name={iconName} size={24} className={s.icon} />
      </button>
      <div className={cn(s.content, contentClassName)}>{children}</div>
      {divider && <div className={s.divider} />}
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div className={s.accordion}>{children}</div>;
}
