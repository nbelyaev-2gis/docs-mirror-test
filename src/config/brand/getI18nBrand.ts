import type { Locale, Brand } from '@config/index';

type Props = {
  locale: Locale;
  brand: Brand;
};

export const getI18nBrand = ({ locale, brand }: Props): string => {
  const config: Record<Brand, Record<Locale, string>> = {
    urbi: {
      ru: 'Urbi',
      en: 'Urbi',
    },
    '2gis': {
      ru: '2ГИС',
      en: '2GIS',
    },
  };

  return config[brand][locale];
};
