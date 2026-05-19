import type { LoadContext, Plugin } from '@docusaurus/types';
import { PluginUxFeedbackOptions } from './types';

export const pluginUxFeedback = (_context: LoadContext, options: unknown): Plugin => {
  const { projectId } = options as PluginUxFeedbackOptions;

  if (!projectId) {
    console.warn('[UX Feedback] UX Feedback ID is not set. Skipping plugin initialization.');
  }

  return {
    name: 'custom-ux-feedback',
    injectHtmlTags() {
      if (!projectId) return {};

      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
(function(w, d, u, h, s) {
  w._uxsSettings = {id: '${projectId}'};
  h = d.getElementsByTagName('head')[0];
  s = d.createElement('script');
  s.async = 1;
  s.src = u;
  h.appendChild(s);
})(window, document, 'https://cdn.uxfeedback.ru/widget.js');`,
          },
        ],
      };
    },
  };
};
