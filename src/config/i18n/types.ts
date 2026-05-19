import type { Config as DocusaurusConfig } from '@docusaurus/types/src/config';

export type Locale = 'ru' | 'en';

export type CustomI18nDocusaurusConfig = DocusaurusConfig['i18n'] & {
  defaultLocale: Locale;
  locales: Locale[];
};
