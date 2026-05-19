import React, { memo } from 'react';

import s from './searchShortcut.module.css';
import { cn } from '@shared/utils';
import { Icon } from '@shared/icons';
import { useOs } from '@shared/hooks/useOS';

export const SearchShortcut = memo(() => {
  const { os, isMobile } = useOs();

  if (!os || os === 'undetermined' || isMobile) {
    return null;
  }

  const metaKey = os === 'macos' ? <Icon name="cmdIcon" size={24} /> : 'Ctrl';

  return (
    <div className={s.shortcut}>
      <div className={cn(s.shortcutKey, s.shortcutMeta)}>{metaKey}</div>
      <div className={s.shortcutKey}>K</div>
    </div>
  );
});

SearchShortcut.displayName = 'SearchShortcut';
