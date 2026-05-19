import { Locale } from '../i18n';

type Props = {
  defaultLocale: Locale;
};

export const getDocusaurusLocale = ({ defaultLocale }: Props): Locale => {
  const locale = process.env.DOCUSAURUS_CURRENT_LOCALE;

  if (!locale || locale === 'undefined') {
    return defaultLocale;
  }

  return locale as Locale;
};
