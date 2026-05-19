import { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { useBrand } from '@shared/hooks/useBrand';
import type { NavigationTagVariants } from '../types';
import { NavigationTileTag } from './NavigationTileTag';
import s from './NavigationTile.module.css';

interface Props {
  title: ReactNode;
  description?: ReactNode;
  variant?: NavigationTagVariants;
  href?: string;
}

export function NavigationTile({ title, description, variant, href }: Props) {
  const brand = useBrand();

  return (
    <Link className={s.wrapper} href={href}>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>
          {typeof title === 'string' ? (
            <Translate values={{ brand: brand.label }}>{title}</Translate>
          ) : (
            title
          )}
        </h2>
        {variant && <NavigationTileTag variant={variant} />}
      </div>
      {description && (
        <p className={s.description}>
          {typeof description === 'string' ? (
            <Translate values={{ brand: brand.label }}>{description}</Translate>
          ) : (
            description
          )}
        </p>
      )}
    </Link>
  );
}
