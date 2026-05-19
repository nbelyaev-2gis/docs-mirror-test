import { memo } from 'react';

import { PlatformCard } from './PlatformCard';
import s from './PlatformGroups.module.css';
import type { PlatformMainSectionInfoBlock } from '@config/nav/types';

interface Props {
  groups: readonly PlatformMainSectionInfoBlock[];
}

export const PlatformGroups = memo<Props>(({ groups }) => {
  return (
    <div className={s.container}>
      {groups.map(({ title, items }, index) => (
        <div key={index} className={s.group}>
          {title && <h3 className={s.groupTitle}>{title}</h3>}
          <div className={s.groupsGrid}>
            {items.map((item) => (
              <PlatformCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});
PlatformGroups.displayName = 'PlatformGroups';
