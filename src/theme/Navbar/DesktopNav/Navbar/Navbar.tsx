import { memo } from 'react';
import SearchButton from '@theme/SearchBar';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import Logo from '@theme/Logo';
import { cn } from '@shared/utils';
import type { PlatformKey, PlatformTab } from '@config/hooks/useNavMenuData';

import { Tab } from './Tab';
import s from './Navbar.module.css';

interface Props {
  activePlatform: PlatformKey | null;
  onPlatformHover: (key: PlatformKey) => void;
  onLeave: () => void;
  onPlatformClick: (key: PlatformKey) => void;
  platformTabs: PlatformTab[];
}

export const Navbar = memo<Props>(
  ({ activePlatform, onPlatformHover, onLeave, onPlatformClick, platformTabs }) => {
    return (
      <nav className={cn(s.navbar, 'navbar')}>
        <div className={s.leftSection}>
          <Logo className={s.logo} imageClassName={s.logoImage} />
          <div className={s.productTabs}>
            {platformTabs.map((tab) => (
              <Tab
                key={tab.key}
                tab={tab}
                isActive={activePlatform === tab.key}
                onPlatformHover={onPlatformHover}
                onLeave={onLeave}
                onPlatformClick={onPlatformClick}
              />
            ))}
          </div>
        </div>

        <div className={s.rightSection}>
          <SearchButton variant="primary" size="default" inputClassName={s.searchInput} />
          <LocaleDropdownNavbarItem />
          <NavbarColorModeToggle className={s.colorModeToggle} />
        </div>
      </nav>
    );
  },
);

Navbar.displayName = 'Navbar';
