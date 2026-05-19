import type { LoadContext, Plugin } from '@docusaurus/types';
import { PluginGAOptions } from './types';

export const pluginGoogleAnalytics = (_context: LoadContext, options: unknown): Plugin => {
  const { trackingID } = options as PluginGAOptions;

  if (!trackingID) {
    console.warn('[GA] Google Analytics tracking ID is not set. Skipping plugin initialization.');
  }

  return {
    name: 'custom-google-analytics',
    injectHtmlTags() {
      if (!trackingID) return {};

      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: `https://www.googletagmanager.com/gtag/js?id=${trackingID}`,
            },
          },
          {
            tagName: 'script',
            innerHTML: `\
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${trackingID}', { debug_mode: true });`,
          },
        ],
      };
    },
  };
};
