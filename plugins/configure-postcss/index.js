/* eslint-disable @typescript-eslint/no-require-imports */
export default function configurePostCss(_context, _options) {
  return {
    name: 'docusaurus-plugin',
    configurePostCss(postcssOptions) {
      const postcssImport = require('postcss-import');
      const postcssCustomMedia = require('postcss-custom-media');

      postcssOptions.plugins.push(postcssImport());
      postcssOptions.plugins.push(
        postcssCustomMedia({
          importFrom: 'src/theme/media.css',
        }),
      );

      return postcssOptions;
    },
  };
}
