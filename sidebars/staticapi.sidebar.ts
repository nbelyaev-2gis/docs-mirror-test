import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  staticapi: [
    {
      type: 'category',
      label: 'Static API',
      items: [
        {
          type: 'doc',
          id: 'maps/others/static/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'maps/others/static/examples',
          label: 'Примеры',
        },
        {
          type: 'doc',
          id: 'maps/others/static/reference',
          label: 'Справочник API',
        },
        {
          type: 'doc',
          id: 'maps/others/static/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
