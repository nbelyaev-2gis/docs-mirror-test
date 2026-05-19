import { memo, useMemo } from 'react';
import Link from '@docusaurus/Link';
import { Icon } from '@shared/icons';
import { Button } from '@shared/uiKit/Button';

import { type PlatformKey, type NavMenuData } from '@config/hooks/useNavMenuData';

import s from './RootMenu.module.css';

interface Props {
  data: NavMenuData;
  onDrillDown: (key: PlatformKey) => void;
  onClose: () => void;
}

export const RootMenu = memo<Props>(({ data, onDrillDown, onClose }) => {
  const platformKeys = useMemo(
    () => Object.keys(data.platformsInfo) as PlatformKey[],
    [data.platformsInfo],
  );

  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        {platformKeys.map((key) => {
          const platform = data.platformsInfo[key];

          return 'href' in platform ? (
            <Link href={platform.href} className={s.button} key={key} onClick={onClose}>
              {platform.title}
            </Link>
          ) : (
            <Button
              key={key}
              wide
              appearance="outline"
              className={s.button}
              onClick={() => onDrillDown(key)}
              size={48}
              endIcon={<Icon name="chevronDown" size={24} className={s.chevron} />}
            >
              {platform.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
});
RootMenu.displayName = 'RootMenu';
