import { useMemo } from 'react';
import Link from '@docusaurus/Link';
import { useBrand } from '@shared/hooks/useBrand';
import { Button } from '@shared/uiKit/Button';
import { getApiPlatformHeroInfo } from '@config/nav';

import s from './ApiPlatformHero.module.css';

export function ApiPlatformHero() {
  const brand = useBrand();
  const hero = useMemo(() => getApiPlatformHeroInfo(brand), [brand]);

  return (
    <div className={s.hero}>
      <div className={s.content}>
        <h1 className={s.title}>{hero.title}</h1>
        <p className={s.description}>{hero.description}</p>
        <Link href={hero.button.link} className={s.button}>
          <Button asChild appearance="outline" size={48}>
            {hero.button.label}
          </Button>
        </Link>
      </div>
      <div className={s.imageWrap}>
        <img src={hero.image} alt={hero.title} className={s.image} />
      </div>
    </div>
  );
}
