import { memo } from 'react';
import SearchBar from '@theme/SearchBar';
import s from './MainPageHero.module.css';
import { useBrand } from '@shared/hooks/useBrand';
import { dataTestId } from '@tests/helpers/locator';
import Translate from '@docusaurus/Translate';
import { aboutLocator } from '../locators';

export const MainPageHero = memo(() => {
  const brand = useBrand();
  return (
    <div className={s.container}>
      <img
        className={s.heroImage}
        src="/img/docs-nav/hero/main_hero_image.png"
        alt="Лого главной страницы"
      />
      <div className={s.text}>
        <h2 className={s.title}>
          <Translate>Документация</Translate>
        </h2>
        <div className={s.description}>
          <Translate values={{ brand: brand.label }}>
            {
              'Примеры, инструкции и справочники API, которые помогут вам начать работу с продуктами {brand} для бизнеса'
            }
          </Translate>
        </div>
      </div>
      <div className={s.searchBar}>
        <SearchBar
          variant="secondary"
          size="default"
          showShortcut
          {...dataTestId(aboutLocator.mainSearchButton)}
        />
      </div>
    </div>
  );
});
MainPageHero.displayName = 'MainPageHero';
