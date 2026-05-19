import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  floorsjsapi: [
    {
      type: 'category',
      label: 'FloorsJS API',
      items: [
        {
          type: 'doc',
          id: 'maps/others/floorsjs/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'maps/others/floorsjs/examples',
          label: 'Примеры',
        },
        {
          type: 'doc',
          id: 'maps/others/floorsjs/reference',
          label: 'Справочник API',
        },
      ],
    },
  ],
};

export default sidebars;
