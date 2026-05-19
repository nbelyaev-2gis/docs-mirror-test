import type { ApiKeysConfig } from '@config/index';

export const mapglApiKeyCommonText = 'Your API access key';
export const directionsApiKeyCommonText = 'Your directions API access key';

export function insertApiKeysToHtml(apiKey: ApiKeysConfig, html: string) {
  return html
    .replaceAll(mapglApiKeyCommonText, apiKey.mapgl.common)
    .replaceAll(directionsApiKeyCommonText, apiKey.navi);
}

export function compileHtmlTemplate(apiKey: ApiKeysConfig, htmlTemplate: string): string {
  return insertApiKeysToHtml(apiKey, htmlTemplate);
}
