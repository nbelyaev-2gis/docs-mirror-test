import { memo } from 'react';
import Link from '@docusaurus/Link';
import type { Brand } from '@config/brand/types';
import type { ApiPlatformServiceCardItem } from '@config/nav/types';

import s from './Cards.module.css';

interface Props {
  cards: ApiPlatformServiceCardItem[];
  brand: Brand;
  onClick?: () => void;
}

export const Cards = memo<Props>(({ cards, onClick }) => {
  return (
    <div className={s.wrapper}>
      {cards
        .filter((item) => item.tag !== 'deprecated')
        .map((item) => (
          <Link key={item.title} className={s.card} href={item.link} onClick={onClick}>
            <span className={s.title}>{item.title}</span>
            <span className={s.description}>{item.description}</span>
          </Link>
        ))}
    </div>
  );
});
Cards.displayName = 'Cards';
