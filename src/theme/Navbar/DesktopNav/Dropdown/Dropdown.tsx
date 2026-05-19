import { memo } from 'react';
import { PLATFORM, type PlatformKey, type NavMenuData } from '@config/hooks/useNavMenuData';

import { ApiPlatformDropdown } from './ui/ApiPlatformDropdown';
import { PlatformDropdown } from './ui/PlatformDropdown';

interface Props {
  activePlatform: PlatformKey;
  data: NavMenuData;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Dropdown = memo<Props>(
  ({ activePlatform, data, onClose, onMouseEnter, onMouseLeave }) => {
    if (activePlatform === PLATFORM.API_PLATFORM) {
      return (
        <ApiPlatformDropdown
          data={data}
          onClose={onClose}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    }

    return (
      <PlatformDropdown
        activePlatform={activePlatform}
        data={data}
        onClose={onClose}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  },
);

Dropdown.displayName = 'Dropdown';
