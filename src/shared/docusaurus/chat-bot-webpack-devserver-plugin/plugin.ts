import { LoadContext, Plugin } from '@docusaurus/types';
import { Options } from 'http-proxy-middleware';
import { buildEnvConfig } from '../webpack-devserver/buildEnv';

const envConfig = buildEnvConfig();

const prefix = '/_/api/chat-bot';

export const chatBotWebpackDevServerPlugin = (_context: LoadContext, _options: any): Plugin => {
  return {
    name: 'chat-bot-webpack-devserver-docusaurus-plugin',
    configureWebpack() {
      return {
        mergeStrategy: { 'devServer.proxy': 'append' },
        devServer: {
          proxy: [
            {
              context: [prefix],
              target: envConfig.CHAT_BOT_API_URL,
              secure: false,
              changeOrigin: true,
              onProxyReq: (proxyReq) => {
                proxyReq.path = proxyReq.path.replace(prefix, '');
                console.log(`[CBWDP] Request. ${proxyReq.host}${proxyReq.path}`);
              },
              onProxyRes: (proxyRes) => {
                const msg = `[CBWDP] Response. Status: ${proxyRes.statusCode}`;
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
