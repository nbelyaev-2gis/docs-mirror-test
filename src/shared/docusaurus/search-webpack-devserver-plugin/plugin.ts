import { LoadContext, Plugin } from '@docusaurus/types';
import { Options } from 'http-proxy-middleware';
import { buildEnvConfig } from '../webpack-devserver/buildEnv';

const envConfig = buildEnvConfig();

export const searchWebpackDevServerPlugin = (_context: LoadContext, _options: any): Plugin => {
  return {
    name: 'search-webpack-devserver-docusaurus-plugin',
    configureWebpack() {
      return {
        mergeStrategy: { 'devServer.proxy': 'append' },
        devServer: {
          proxy: [
            {
              context: ['/_/api/search'],
              target: envConfig.SEARCH_API_URL,
              secure: false,
              changeOrigin: true,
              onProxyReq: (proxyReq) => {
                const url = new URL(proxyReq.path, envConfig.SEARCH_API_URL);
                proxyReq.path = `/collections/${envConfig.SEARCH_API_COLLECTION}/documents/search${url.search}`;
                proxyReq.setHeader('x-typesense-api-key', envConfig.APIKEY_DOCS_SEARCH);
                console.log(`[SWDDP] Request. ${proxyReq.host}${proxyReq.path}`);
              },
              onProxyRes: (proxyRes) => {
                const msg = `[SWDDP] Response. Status: ${proxyRes.statusCode}`;
                if (
                  proxyRes.statusCode &&
                  proxyRes.statusCode >= 200 &&
                  proxyRes.statusCode < 300
                ) {
                  console.log(msg);
                } else {
                  console.error(msg);
                }
              },
            } as Options,
          ],
        },
      };
    },
  };
};
