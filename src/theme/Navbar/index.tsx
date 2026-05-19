import type { ReactElement } from 'react';
import { useMemo, useEffect } from 'react';
import { useNavMenuData } from '@config/hooks/useNavMenuData';
import { DesktopNavBar, DesktopNavDropdown } from './DesktopNav';
import { MobileNavBar, MobileMenuDrawer } from './MobileNav';
import { useIsMobile } from './hooks/useIsMobile';
import { useDropdownControl } from './hooks/useDropdownControl';
import { useMobileMenu } from './hooks/useMobileMenu';
import type { PlatformKey } from '@config/hooks/useNavMenuData';

export default function Navbar(): ReactElement {
  const isMobile = useIsMobile();
  const mobileMenu = useMobileMenu();
  const dropdown = useDropdownControl();

  const data = useNavMenuData();

  const platformTabs = useMemo(
    () =>
      (Object.keys(data.platformsInfo) as PlatformKey[]).map((key) => {
        const info = data.platformsInfo[key];
        return {
          key,
          label: info.title,
          ...('href' in info ? { href: info.href as string } : {}), // для пунктов меню без дропдауна
        };
      }),
    [data.platformsInfo],
  );

  useEffect(() => {
    if (!isMobile) {
      mobileMenu.close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, mobileMenu.close]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dropdown.handleDropdownClose();
        mobileMenu.close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdown.handleDropdownClose, mobileMenu.close]);

  if (isMobile) {
    return (
      <>
        <MobileNavBar isMenuOpen={mobileMenu.isOpen} onMenuToggle={mobileMenu.toggle} />
        {mobileMenu.isOpen && <MobileMenuDrawer data={data} onClose={mobileMenu.close} />}
      </>
    );
  }

  return (
    <>
      <DesktopNavBar
        activePlatform={dropdown.activePlatform}
        onPlatformHover={dropdown.handlePlatformHover}
        onLeave={dropdown.handleLeave}
        onPlatformClick={dropdown.handlePlatformClick}
        platformTabs={platformTabs}
      />
      {dropdown.activePlatform && (
        <DesktopNavDropdown
          activePlatform={dropdown.activePlatform}
          data={data}
          onClose={dropdown.handleDropdownClose}
          onMouseEnter={dropdown.handleDropdownEnter}
          onMouseLeave={dropdown.handleLeave}
        />
      )}
    </>
  );
}
