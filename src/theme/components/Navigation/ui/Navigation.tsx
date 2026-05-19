import { NavigationTileGroup } from './NavigationTileGroup';
import s from './Navigation.module.css';
import { cn } from '@shared/utils';
import { NavigationTileItem } from '../types';
import { navigationLocator } from '../locators';
import { dataTestId } from '@tests/helpers/locator';

interface Props {
  items: NavigationTileItem[];
}

export function Navigation({ items }: Props) {
  return (
    <div className={s.layout}>
      <div className={cn('container', s.wrapper)} {...dataTestId(navigationLocator.wrapper)}>
        {items.map((item, i) => (
          <NavigationTileGroup key={i} group={item.items} title={item.label} iconName={item.icon} />
        ))}
      </div>
    </div>
  );
}
