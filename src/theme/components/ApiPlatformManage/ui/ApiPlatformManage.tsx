import { memo } from 'react';
import { translate } from '@docusaurus/Translate';
import { Card } from './Card';

import s from './ApiPlatformManage.module.css';
import { ManageCard } from '../types';

type Props = {
  cards: ManageCard[];
};

export const ApiPlatformManage = memo<Props>(({ cards }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{translate({ message: 'Управление' })}</div>
      <div className={s.cards}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
});
ApiPlatformManage.displayName = 'ApiPlatformManage';
