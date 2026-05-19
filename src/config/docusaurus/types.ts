import type { Config as DocusaurusConfig } from '@docusaurus/types';
import type { EnvConfig } from '../env/schema';

export type DocusaurusCustomConfig = DocusaurusConfig & {
  customFields: {
    envConfig: EnvConfig;
    isChatBotEnabled: boolean;
    brand: { id: EnvConfig['BRAND']; label: string };
    localeShortLabels: Partial<Record<'ru' | 'en', string>>;
  };
  themeConfig: {
    navbar: {
      items: [];
      logo: {
        alt: string;
        src: string;
        srcDark: string;
      };
    };
  };
};
