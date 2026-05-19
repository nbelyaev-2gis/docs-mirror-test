import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  twinsAPI: [
    {
      type: 'category',
      label: 'Twins API',
      items: [
        {
          type: 'doc',
          id: 'api/search/twins/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/search/twins/examples',
          label: 'Примеры',
        },
        {
          type: 'doc',
          id: 'api/search/twins/reference',
          label: 'Справочник API',
        },
      ],
    },
  ],
};

export default sidebars;
