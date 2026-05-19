import path from 'path';
import type { Plugin, LoadContext } from '@docusaurus/types';

export const staticAssetsDevServerPlugin = (context: LoadContext): Plugin => {
  return {
    name: 'static-assets-devserver-docusaurus-plugin',
    configureWebpack(_config, isServer) {
      if (isServer) return {}; // Настраиваем только для клиента/dev-сервера

      const staticDir = path.resolve(context.siteDir, 'static');
      return {
        mergeStrategy: { 'devServer.static': 'prepend' },
        devServer: {
          static: [
            {
              directory: path.join(staticDir, 'img'),
              publicPath: `/img`,
              watch: true,
            },
            {
              directory: path.join(staticDir, 'video'),
              publicPath: `/video`,
              watch: true,
            },
          ],
        },
      };
    },
  };
};
