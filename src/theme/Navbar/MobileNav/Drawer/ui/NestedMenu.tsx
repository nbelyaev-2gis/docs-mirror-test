import { memo } from 'react';
import Link from '@docusaurus/Link';
import { Button } from '@shared/uiKit/Button';

import { type PlatformKey, type NavMenuData } from '@config/hooks/useNavMenuData';

import { Cards } from './Cards';
import { BackButton } from './BackButton';

import s from './NestedMenu.module.css';
import { translate } from '@docusaurus/Translate';

interface Props {
  platform: PlatformKey;
  data: NavMenuData;
  onBack: () => void;
  onClose: () => void;
}

export const NestedMenu = memo<Props>(({ platform, data, onBack, onClose }) => {
  const platformInfo = data.platformsInfo[platform];
  const managementInfo = data.managementByPlatform[platform];

  if (!managementInfo) return null;

  const entries = Object.values(managementInfo);

  return (
    <>
      <BackButton onClick={onBack}>{platformInfo.title}</BackButton>
      <div className={s.wrapper}>
        <Cards cards={entries} brand={data.brand.id} onClick={onClose} />
        <div className={s.serviceButtons}>
          {platformInfo.controlButtons
            .filter((button) => !button.hideInNav)
            .map((button) => (
              <Link key={button.label} href={button.link} onClick={onClose}>
                <Button asChild appearance="primary" size={40} wide>
                  {translate({ message: button.label, id: `navbar.button.${button.label}` })}
                </Button>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
});

NestedMenu.displayName = 'NestedMenu';
