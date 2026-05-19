import { normalizeUrl } from '@docusaurus/utils';
import { urlTemplateVar } from '../model/constants';

type Options = {
  baseUrl: string;
  refType: string;
  sdkVersion: string;
};

export const getUrlFromTemplate = (
  urlTemplate: string,
  { baseUrl, refType, sdkVersion }: Options,
): string => {
  const urlParts = urlTemplate.split('/').map((part) => {
    if (part === urlTemplateVar.version) return sdkVersion;
    if (part === urlTemplateVar.refType) return refType;
    return part;
  });

  return normalizeUrl([baseUrl, ...urlParts]);
};
