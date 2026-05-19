import type { ApiKeysConfig } from '@config/apiKeys';

export const mapglApiKeyCommonText = 'Your API access key';
const directionsApiKeyCommonText = 'Your directions API access key';

export function insertSandboxDataIntoJs(apiKey: ApiKeysConfig, js: string, comment: string) {
  if (js.includes(mapglApiKeyCommonText) || js.includes(directionsApiKeyCommonText)) {
    return `\
${comment}

${js
  .replaceAll(mapglApiKeyCommonText, apiKey.mapgl.jsFiddle)
  .replaceAll(directionsApiKeyCommonText, apiKey.navi)}`;
  }

  return js;
}
