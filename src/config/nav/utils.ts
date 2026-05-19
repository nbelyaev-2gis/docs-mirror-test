import i18n from '@generated/i18n';
import type { Locale } from '@config/i18n/types';
import type { NavBrand, OverlayImageData } from './types';

type BrandLocaleLinkMap = Record<string, Record<string, string>>;

export const resolveLink = (linkMap: BrandLocaleLinkMap, brandId: NavBrand['id']): string => {
  const locale = i18n.currentLocale as Locale;
  const brandLinks = linkMap[brandId];
  return brandLinks[locale] ?? brandLinks['en'];
};

export const makeOverlayImage = (basePath: string): OverlayImageData => {
  const locale = i18n.currentLocale as Locale;
  const src = `${basePath}-${locale}.png`;
  return {
    src,
    sources: [{ srcSet: `${src} 1x, ${basePath}-${locale}@2x.png 2x` }],
  };
};
