import { ReactNode } from 'react';
import { IconName32 } from '@shared/icons';

export type NavigationTagVariants = 'new' | 'deprecated' | 'beta';

export type NavigationTileGroup =
  | {
      tag?: NavigationTagVariants;
      label: ReactNode;
      docId?: string;
      description?: ReactNode;
    }[]
  | undefined;

export type NavigationTileItem = {
  items: NavigationTileGroup;
  label?: string;
  icon?: IconName32;
};
