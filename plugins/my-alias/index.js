export default function MyAliasPlugin(_context, _options) {
  return {
    name: 'my-alias',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@shared/*': ['@site/src/shared/*'],
            '@uiKit/*': ['@site/src/shared/uiKit/*'],
            '@theme/*': ['@site/src/theme/*'],
            '@config/*': ['@site/src/config/*'],
            '@tests/*': ['@site/tests/*'],
            '@docs/*': ['@site/docs/*'],
            '@i18n/*': ['@site/i18n/*'],
          },
        },
      };
    },
  };
}
