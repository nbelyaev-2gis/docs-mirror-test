import React, { memo } from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import type NavbarItemType from '@theme/NavbarItem';
import type { WrapperProps } from '@docusaurus/types';
import { cn } from '@shared/utils';

import s from './navbarItem.module.css';

type NavbarItemWrapperProps = WrapperProps<typeof NavbarItemType> & {
  isHiddenOnLargeScreen?: boolean;
  isHiddenOnMediumScreen?: boolean;
  isDropdownItem?: boolean;
};

const NavbarItemWrapper = memo<NavbarItemWrapperProps>(
  ({ isHiddenOnLargeScreen, isHiddenOnMediumScreen, ...props }) => (
    <NavbarItem
      {...props}
      className={
        !props.mobile &&
        cn([
          // скрываем дропдаун "Сервисы" на широком экране
          isHiddenOnLargeScreen && s.hiddenOnLargeScreen,
          // скрываем отдельные сервисы, оставляем дропдаун
          !props.isDropdownItem && isHiddenOnMediumScreen && s.hiddenOnMediumScreen,
        ])
      }
    />
  ),
);

NavbarItemWrapper.displayName = 'NavbarItemWrapper';

export default NavbarItemWrapper;
