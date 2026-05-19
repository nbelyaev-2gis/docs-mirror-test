import { memo } from 'react';
import Link from '@docusaurus/Link';
import { type ApiPlatformServiceCardItem } from '@config/nav/types';
import { cn } from '@shared/utils';
import s from './Card.module.css';
import { HoverableCard } from '@theme/components/HoverableCard';

type Props = {
  item: ApiPlatformServiceCardItem;
};

export const Card = memo<Props>(({ item }) => {
  const href = item.link;
  const Component = href ? Link : 'div';

  return (
    <HoverableCard>
      <Component className={cn(s.card)} href={href}>
        <h4 className={s.cardTitle}>
          {item.title}
          {item.tag && <span className={cn(s.tag, s[item.tag])}>{item.tag}</span>}
        </h4>
        <p className={s.cardDescription}>{item.description}</p>
      </Component>
    </HoverableCard>
  );
});
Card.displayName = 'Card';
