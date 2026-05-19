import type { Brand } from '../brand/types';
import { CustomI18nDocusaurusConfig } from './types';

type Props = {
  brand: Brand;
};

const config: Record<Brand, CustomI18nDocusaurusConfig> = {
  '2gis': {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },
  urbi: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

export const getI18nConfig = ({ brand }: Props): CustomI18nDocusaurusConfig => {
  return {
    // Относительно корня
    path: './i18n',
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
      },
      ru: {
        label: 'Русский',
        htmlLang: 'ru',
      },
    },
    ...config[brand],
  };
};
