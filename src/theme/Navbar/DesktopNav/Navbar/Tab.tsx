import { memo } from 'react';
import Link from '@docusaurus/Link';
import { cn } from '@shared/utils';
import { Icon } from '@shared/icons';

import type { PlatformKey, PlatformTab } from '@config/hooks/useNavMenuData';

import s from './Tab.module.css';

interface Props {
  isActive: boolean;
  onPlatformHover: (key: PlatformKey) => void;
  onLeave: () => void;
  onPlatformClick: (key: PlatformKey) => void;
  tab: PlatformTab;
}

export const Tab = memo<Props>(({ tab, isActive, onPlatformHover, onPlatformClick, onLeave }) =>
  tab.href ? (
    <Link key={tab.key} href={tab.href} className={s.productTab}>
      {tab.label}
    </Link>
  ) : (
    <button
      key={tab.key}
      className={cn(s.productTab, isActive && s.productTabActive)}
      onMouseEnter={() => onPlatformHover(tab.key)}
      onMouseLeave={onLeave}
      onClick={() => onPlatformClick(tab.key)}
      type="button"
    >
      {tab.label}
      <Icon name="chevronDown" size={24} className={s.productTabIcon} />
    </button>
  ),
);
Tab.displayName = 'Tab';
