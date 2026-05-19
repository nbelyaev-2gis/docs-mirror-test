import { memo } from 'react';

import Link from '@docusaurus/Link';
import { Icon } from '@shared/icons';

import s from './Card.module.css';
import { ManageCard } from '../types';
import { HoverableCard } from '../../HoverableCard';

export const Card = memo<ManageCard>(({ title, description, mainPageIconName, link }) => {
  return (
    <HoverableCard className={s.wrapper}>
      <Link href={link} className={s.link}>
        <Icon name={mainPageIconName} size={48} className={s.icon} />
        <div className={s.content}>
          <h4 className={s.title}>{title}</h4>
          <p className={s.description}>{description}</p>
        </div>
      </Link>
    </HoverableCard>
  );
});
Card.displayName = 'Card';
