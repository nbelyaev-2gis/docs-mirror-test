import { LoadContext, Plugin } from '@docusaurus/types';
import { RequestHandler, Request, Response, Application } from 'express';

export const logsWebpackDevServerPlugin = (_context: LoadContext, _options: any): Plugin => {
  return {
    name: 'logs-webpack-devserver-docusaurus-plugin',
    configureWebpack() {
      return {
        mergeStrategy: { 'devServer.setupMiddlewares': 'replace' },
        devServer: {
          setupMiddlewares: (middlewares: RequestHandler[], devServer: { app: Application }) => {
            devServer?.app?.post('/_/api/log', (req: Request, res: Response) => {
              res.status(200).json({ success: true });
            });

            return middlewares;
          },
        },
      };
    },
  };
};
