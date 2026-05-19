import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  photosAPI: [
    {
      type: 'category',
      label: 'Photos API',
      items: [
        {
          type: 'doc',
          id: 'api/ugc/photos/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/ugc/photos/examples',
          label: 'Примеры',
        },
      ],
    },
  ],
};

export default sidebars;
