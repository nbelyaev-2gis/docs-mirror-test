import { ThemeConfig } from '@docusaurus/preset-classic';
import { Locale } from '../i18n';
import { getI18nBrand, Brand } from '../brand';

export const getFooterConfig = ({
  brand,
  locale,
}: {
  brand: Brand;
  locale: Locale;
}): ThemeConfig['footer'] => {
  const links =
    brand === '2gis'
      ? [
          {
            title: 'basic',
            items: [
              {
                label: 'Все продукты 2ГИС',
                href: locale === 'ru' ? 'https://dev.2gis.ru/' : 'https://dev.2gis.com/',
              },
              {
                label: 'Правовая информация',
                href: locale === 'ru' ? 'https://law.2gis.ru/' : 'https://law.2gis.com/',
              },
              {
                label: 'Написать в поддержку',
                href:
                  locale === 'ru'
                    ? 'mailto:api@2gis.ru?subject=%D0%92%D0%BE%D0%BF%D1%80%D0%BE%D1%81%20%D0%BF%D0%BE%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%20%D1%81%20API%20%26%20SDK%202GIS&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%0A%0A%D0%9C%D0%BE%D0%B9%20API-%D0%BA%D0%BB%D1%8E%D1%87%20(%D0%B5%D1%81%D0%BB%D0%B8%20%D0%B5%D1%81%D1%82%D1%8C)%3A%0A%0A%D0%A0%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0%2C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%20%D0%BE%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%B5%2C%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B9%20%D1%83%20%D0%B2%D0%B0%D1%81%20%D0%B2%D0%BE%D0%B7%D0%BD%D0%B8%D0%BA.%20%D0%9C%D1%8B%20%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%20%D0%B2%D0%B0%D0%BC%20%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D0%BC%2C%20%D0%BD%D0%BE%20%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D0%BC%20%D1%8D%D1%82%D0%BE%20%D0%B1%D1%8B%D1%81%D1%82%D1%80%D0%B5%D0%B5%2C%20%D0%B5%D1%81%D0%BB%D0%B8%20%D0%B2%D1%8B%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B8%D1%82%D0%B5%20%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%D1%8B%2C%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B%20%D0%BA%D0%BE%D0%B4%D0%B0%20%D0%B8%20%D0%BB%D1%8E%D0%B1%D1%83%D1%8E%20%D0%B4%D1%80%D1%83%D0%B3%D1%83%D1%8E%20%D1%83%D1%82%D0%BE%D1%87%D0%BD%D1%8F%D1%8E%D1%89%D1%83%D1%8E%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E.%0A%0A%D0%A1%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE.'
                    : 'mailto:api@2gis.com?subject=Questions%20about%20API%20%26%20SDK%202GIS&body=Hi%2C%0A%0AYour%20API%20key%20(if%20exists)%3A%20%0A%0AIf%20you%20have%20a%20problem%2C%20describe%20it%20step%20by%20step.%20Additional%20screenshots%20will%20be%20useful%20too.%20The%20more%20information%20you%20sent%20to%20us%2C%20the%20faster%20we%20can%20help%20you!%0A%0ABest%20regards%2C%0A2GIS%20Support%20Team.',
              },
            ],
          },
          {
            title: 'social',
            items: [
              {
                label: 'ВКонтакте',
                href: 'https://vk.com/2gis',
              },
              {
                label: 'Хабр',
                href: 'https://habrahabr.ru/company/2gis/',
              },
              {
                label: 'VC',
                href: 'https://vc.ru/id808769',
              },
            ],
          },
        ]
      : [
          {
            label: 'Legal information',
            href: 'https://law.urbi.ae/privacy',
          },
          {
            label: 'Contact support',
            href: 'mailto:api@2gis.com?subject=Questions%20about%20API%20%26%20SDK%202GIS&body=Hi%2C%0A%0AYour%20API%20key%20(if%20exists)%3A%20%0A%0AIf%20you%20have%20a%20problem%2C%20describe%20it%20step%20by%20step.%20Additional%20screenshots%20will%20be%20useful%20too.%20The%20more%20information%20you%20send%20to%20us%2C%20the%20faster%20we%20can%20help%20you!%0A%0ABest%20regards%2C%0A2GIS%20Support%20Team.',
          },
        ];

  const localizedBrand = getI18nBrand({ brand, locale });
  const copyright = `© ${new Date().getFullYear()} ${localizedBrand}`;
  return {
    links,
    copyright,
  };
};
