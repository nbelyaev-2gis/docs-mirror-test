import path from 'path';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import { getI18nConfig } from '../i18n';
import { createSubstitutionPlugin } from '../../shared/docusaurus/remark-plugin/subsitution';
import { DocusaurusCustomConfig } from './types';
import { getDocusaurusLocale } from './getDocusaurusLocale';
import { getI18nTitle, getI18nBrand } from '../brand';
import { openApiData } from '../openApi/openApiData';
import { getOpenApiSpecs } from '../openApi/getOpenApiSpecs';
import type * as Redocusaurus from 'redocusaurus';
import { getFooterConfig } from '../footer/getFooterConfig';
import { getSubstitutions } from '../substitutions';
import { buildEnvConfig } from '../env/buildEnvConfig';
import { searchWebpackDevServerPlugin } from '../../shared/docusaurus/search-webpack-devserver-plugin';
import { chatBotWebpackDevServerPlugin } from '../../shared/docusaurus/chat-bot-webpack-devserver-plugin';
import { logsWebpackDevServerPlugin } from '../../shared/docusaurus/logs-webpack-devserver-plugin';
import { staticAssetsDevServerPlugin } from '../../shared/docusaurus/static-assets-devserver-plugin';
import { createPluginGoogleAnalytics } from '../../shared/docusaurus/ga';
import { createPluginUxFeedback } from '../../shared/docusaurus/ux-feedback';

export const getDocusaurusConfig = (): DocusaurusCustomConfig => {
  const env = buildEnvConfig();

  const i18nConfig = getI18nConfig({ brand: env.BRAND });
  const locale = getDocusaurusLocale({ defaultLocale: i18nConfig.defaultLocale });

  const footerConfig = getFooterConfig({ brand: env.BRAND, locale });

  return {
    title: getI18nTitle({ locale, brand: env.BRAND }),
    favicon: `/assets/favicon/${env.BRAND}/favicon.ico`,
    url: env.APP_URL,
    baseUrl: '/',

    onBrokenLinks: 'warn',

    markdown: {
      hooks: {
        onBrokenMarkdownLinks: 'warn',
        onBrokenMarkdownImages: 'ignore',
      },
    },

    i18n: i18nConfig,

    customFields: {
      brand: { id: env.BRAND, label: getI18nBrand({ locale, brand: env.BRAND }) },
      isChatBotEnabled: env.BRAND === '2gis',
      envConfig: env,
      localeShortLabels: {
        en: 'EN',
        ru: 'RU',
      },
    },

    plugins: [
      'my-alias',
      'configure-postcss',
      [searchWebpackDevServerPlugin, {}],
      [chatBotWebpackDevServerPlugin, {}],
      [logsWebpackDevServerPlugin, {}],
      [staticAssetsDevServerPlugin, {}],
      createPluginGoogleAnalytics({ trackingID: env.GA_TRACKING_ID }),
      createPluginUxFeedback({ projectId: env.UX_FEEDBACK_ID }),
      // Генерация PDF файлов сделана в формате POC, поэтому пока выключена
      // [
      //   pdfGeneratorPlugin,
      //   {
      //     keepDebugHtmls: false,
      //     sidebarNames: ['on-premise', 'platform-manager'],
      //     addDownloadButton: true,
      //     autoBuildPdfs: true,
      //     ignoreDocs: ['licenses'],
      //     author: '2GIS',
      //     margins: {
      //       top: '2cm',
      //       right: '1.5cm',
      //       bottom: '2cm',
      //       left: '2cm',
      //     },
      //     puppeteerTimeout: 0,
      //   },
      // ],
    ],

    presets: [
      [
        'classic',
        {
          docs: {
            exclude: [
              '**/_*.mdx',
              '**/_*.md',
              ...(env.DISTRIBUTION_MODE === 'public' ? ['**/api/ugc/**'] : []),
            ],
            breadcrumbs: true,
            showLastUpdateTime: true,
            sidebarCollapsible: true,
            path: 'docs',
            routeBasePath: '/', // Использовать папку docs как корневой элемент
            sidebarPath: './sidebars.new.ts',
            remarkPlugins: [
              createSubstitutionPlugin({
                substitutions: getSubstitutions({ __BASE_URL__: env.APP_URL }),
                excludeFiles: [
                  '/docs/ios/sdk/reference/**/*.mdx',
                  '/docs/android/sdk/reference/**/*.mdx',
                  '/docs/api/**/reference/**/*.mdx',
                ],
              }),
            ],
          },
          blog: false,
          // @TODO blog: раскомментировать
          // blog: {
          //   path: 'blog',
          //   onInlineAuthors: 'ignore',
          //   remarkPlugins: [
          //     createSubstitutionPlugin({
          //       substitutions: getSubstitutions({ __BASE_URL__: env.APP_URL }),
          //       excludeFiles: [],
          //     }),
          //   ],
          // },
          theme: {
            customCss: './src/theme/custom.css',
          },
        } satisfies Preset.Options,
      ],
      [
        'redocusaurus',
        {
          config: path.join(__dirname, '..', 'openApi', 'redocly.yaml'),
          specs: getOpenApiSpecs(openApiData, locale, env.DISTRIBUTION_MODE),
        },
      ] satisfies Redocusaurus.PresetEntry,
    ],

    themeConfig: {
      image: `assets/favicon/${env.BRAND}/apple-touch-icon.png`,
      metadata: [
        {
          // interactive-widget – нужно для хрома, чтобы решить проблему с мобильной клавиатурой, перекрывающей инпут чатбота.
          // Подробнее: https://developer.chrome.com/blog/viewport-resize-behavior#opting_in_to_a_different_behavior
          // viewport-fit – для корректной работы переменных safe зоны в css
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, interactive-widget=resizes-content, viewport-fit=cover',
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: `${env.BRAND} logo`,
          src: `assets/logo/${env.BRAND}/${locale}/logo-light.svg`,
          srcDark: `assets/logo/${env.BRAND}/${locale}/logo-dark.svg`,
        },
        items: [] as const,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      footer: footerConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['dart'],
      },
    } satisfies Preset.ThemeConfig,

    clientModules: [
      './src/config/clientModules/mutateUrlAnchors.ts',
      './src/config/clientModules/clientRedirects.ts',
    ],
  };
};
