import { memo } from 'react';
import { translate } from '@docusaurus/Translate';
import { Icon } from '@shared/icons';
import { cn } from '@shared/utils';

import SearchButton from '@theme/SearchBar';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import Logo from '@theme/Logo';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import s from './Navbar.module.css';

interface Props {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export const Navbar = memo<Props>(({ isMenuOpen, onMenuToggle }) => {
  return (
    <nav className={cn('navbar', s.navbar)}>
      <div className={s.leftSection}>
        <Logo className={s.logo} imageClassName={s.logoImage} />
        {isMenuOpen && <NavbarColorModeToggle className={s.colorModeToggle} />}
      </div>

      <div className={s.rightSection}>
        {!isMenuOpen && (
          <>
            <SearchButton variant="primary" size="default" inputClassName={s.searchInput} />
            <LocaleDropdownNavbarItem />
          </>
        )}
        <button
          type="button"
          className={s.hamburger}
          onClick={onMenuToggle}
          aria-label={translate({ message: isMenuOpen ? 'Закрыть меню' : 'Открыть меню' })}
        >
          <Icon name={isMenuOpen ? 'cross' : 'hamburger'} size={24} className={s.hamburgerIcon} />
        </button>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';
