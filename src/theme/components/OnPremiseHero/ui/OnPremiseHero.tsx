import Translate from '@docusaurus/Translate';
import { useBrand } from '@shared/hooks/useBrand';

import { Hero } from '../../Hero';
import s from './OnPremiseHero.module.css';

export function OnPremiseHero() {
  const brand = useBrand();

  const title = <Translate>Приватные инсталляции</Translate>;

  const description = (
    <Translate
      values={{
        brand: brand.label,
      }}
    >
      {
        'Разверните продукты и данные {brand} в закрытом контуре и получите полноценное ГИС-решение для ваших бизнес-задач'
      }
    </Translate>
  );

  return (
    <Hero
      title={title}
      description={description}
      leftBg={<div className={s.backgroundLeft}></div>}
      rightBg={<div className={s.backgroundRight}></div>}
    />
  );
}
