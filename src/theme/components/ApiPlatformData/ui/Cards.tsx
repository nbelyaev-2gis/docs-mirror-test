import { memo } from 'react';
import { getApiPlatformServiceApis } from '@config/nav';
import { ApiPlatformServiceKey } from '@config/nav/types';

import { Card } from './Card';
import s from './Cards.module.css';

type Props = {
  groups: ReturnType<typeof getApiPlatformServiceApis>[ApiPlatformServiceKey];
};

export const Cards = memo(({ groups }: Props) => {
  return (
    <div className={s.groupsList}>
      {groups.map((group: (typeof groups)[number], groupIndex: number) => (
        <section key={groupIndex} className={s.groupSection}>
          {group.title && <h3 className={s.groupTitle}>{group.title}</h3>}

          <div className={s.cardsGrid}>
            {group.items.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
});
Cards.displayName = 'Cards';
