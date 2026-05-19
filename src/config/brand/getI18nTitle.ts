import type { Locale } from '@config/i18n';
import type { Brand } from '@config/brand/types';

type Props = {
  locale: Locale;
  brand: Brand;
};

export const getI18nTitle = ({ locale, brand }: Props): string => {
  const config: Record<Brand, Record<Locale, string>> = {
    urbi: {
      ru: 'Urbi Документация',
      en: 'Urbi Documentation',
    },
    '2gis': {
      ru: '2ГИС Документация',
      en: '2GIS Documentation',
    },
  };

  return config[brand][locale];
};
