import { memo } from 'react';

import { type NavMenuData } from '@config/hooks/useNavMenuData';
import { Brand } from '@config/index';
import { ApiPlatformServiceKey } from '@config/nav/types';

import { Cards } from './Cards';
import s from './ApiPlatformSections.module.css';

interface Props {
  sections: NavMenuData['serviceApis'][ApiPlatformServiceKey];
  brand: Brand;
  onClose: () => void;
}

export const ApiPlatformSections = memo<Props>(({ sections, brand, onClose }) => {
  return (
    <div className={s.sections}>
      {sections.map(({ title, items }) => (
        <div key={title} className={s.section}>
          <div className={s.title}>{title}</div>
          <Cards cards={items} brand={brand} onClick={onClose} />
        </div>
      ))}
    </div>
  );
});
ApiPlatformSections.displayName = 'ApiPlatformSections';
