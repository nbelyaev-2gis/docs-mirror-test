import s from './NavigationTileGroup.module.css';
import { NavigationTile } from './NavigationTile';
import { Icon, type IconName32 } from '@shared/icons';
import Translate from '@docusaurus/Translate';
import { useBrand } from '@shared/hooks/useBrand';
import { type NavigationTileGroup as NavigationTileGroupType } from '../types';

interface Props {
  title?: string;
  group?: NavigationTileGroupType;
  iconName?: IconName32;
}

export function NavigationTileGroup({ title, group, iconName }: Props) {
  const brand = useBrand();

  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        {iconName && (
          <div className={s.iconWrapper}>
            <Icon name={iconName} size={32} className={s.icon} />
          </div>
        )}
        {title && (
          <h2 className={s.title}>
            <Translate values={{ brand: brand.label }}>{title}</Translate>
          </h2>
        )}
      </div>
      <div className={s.groupWrapper}>
        {group?.map(({ tag, label, description, docId }) => (
          <NavigationTile
            key={docId}
            variant={tag}
            title={label}
            description={description}
            // docId — строки вида "on-premise/deployment/advanced".
            // См. описание проблемы в https://jira.2gis.ru/browse/GEFEST-2942
            href={`/${docId}`}
          />
        ))}
      </div>
    </div>
  );
}
