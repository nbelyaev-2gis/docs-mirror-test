import { memo } from 'react';
import Link from '@docusaurus/Link';
import { Icon } from '@shared/icons';
import { cn } from '@shared/utils/css/cn';
import { HoverableCard } from '@theme/components/HoverableCard';
import s from './PlatformCard.module.css';

import type { NavCardItem } from '@config/nav/types';

export const PlatformCard = memo<NavCardItem>(({ link, title, description, mainPageIconName }) => {
  const href = link || undefined;
  const Component = href ? Link : 'div';

  return (
    <HoverableCard className={s.wrapper}>
      <Component key={title} className={cn(s.card, href && s.link)} href={href}>
        <Icon name={mainPageIconName} size={32} className={s.icon} />
        <div className={s.textWrapper}>
          <h4 className={s.title}>{title}</h4>
          <p className={s.text}>{description}</p>
        </div>
      </Component>
    </HoverableCard>
  );
});
PlatformCard.displayName = 'PlatformCard';
