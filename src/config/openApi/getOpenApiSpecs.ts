import { OpenapiUrl } from './types';
import { Locale } from '../i18n';
import { DistributionMode } from '../distributionMode/types';

export const getOpenApiSpec = (id: string, link: string) => ({ id, spec: generateSSLLink(link) });

//Функция для изменения протоколов в урлах с http на https
const generateSSLLink = (link: string) => link.replace(/(?<!s:)http\b/g, 'https');

export function getOpenApiSpecs(
  data: { id: string; openapiUrl: OpenapiUrl }[],
  locale: Locale,
  mode: DistributionMode,
) {
  return data.map(({ id, openapiUrl }) => {
    if (typeof openapiUrl === 'string') {
      return getOpenApiSpec(id, openapiUrl);
    }

    if (typeof openapiUrl === 'object' && 'ru' in openapiUrl) {
      return getOpenApiSpec(id, openapiUrl[locale]);
    }

    if (typeof openapiUrl === 'object' && mode in openapiUrl && locale in openapiUrl[mode]) {
      return getOpenApiSpec(id, openapiUrl[mode][locale]);
    }

    throw new Error(`Unknown openapi url type in openapi document with id: ${id}`);
  });
}
