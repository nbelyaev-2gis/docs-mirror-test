import s from './NavigationTileTag.module.css';
import { cn } from '@shared/utils';
import type { NavigationTagVariants } from '../types';

interface Props {
  variant: NavigationTagVariants;
}

export function NavigationTileTag({ variant }: Props) {
  return <div className={cn(s.wrapper, s[variant])}>{variant}</div>;
}
