import { memo } from 'react';
import Link from '@docusaurus/Link';
import { Button } from '@shared/uiKit/Button';

import { type PlatformKey, type NavMenuData } from '@config/hooks/useNavMenuData';

import { DropdownShell } from './DropdownShell';
import { Card } from './Card';

import s from './PlatformDropdown.module.css';

interface Props {
  activePlatform: PlatformKey;
  data: NavMenuData;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const PlatformDropdown = memo<Props>(
  ({ activePlatform, data, onClose, onMouseEnter, onMouseLeave }) => {
    const platformInfo = data.platformsInfo[activePlatform];
    const managementInfo = data.managementByPlatform[activePlatform];

    const managementEntries = Object.entries(managementInfo);

    return (
      <DropdownShell onClose={onClose} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={s.content}>
          {managementEntries.map(([managementKey, item]) => (
            <Card
              key={managementKey}
              href={item.link}
              title={item.title}
              description={item.description}
              onClick={onClose}
            />
          ))}
          <div className={s.buttons}>
            {platformInfo.controlButtons
              .filter((button) => !button.hideInNav)
              .map((button) => (
                <Link key={button.label} href={button.link} className={s.button} onClick={onClose}>
                  <Button asChild wide appearance="primary" size={40}>
                    {button.label}
                  </Button>
                </Link>
              ))}
          </div>
        </div>
      </DropdownShell>
    );
  },
);

PlatformDropdown.displayName = 'PlatformDropdown';
