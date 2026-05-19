import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  authAPI: [
    {
      type: 'category',
      label: 'Auth API',
      items: [
        {
          type: 'doc',
          id: 'api/ugc/auth/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/ugc/auth/examples',
          label: 'Примеры',
        },
      ],
    },
  ],
};

export default sidebars;
