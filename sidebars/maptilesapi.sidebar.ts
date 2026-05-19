import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  maptilesapi: [
    {
      type: 'category',
      label: 'Map Tiles API',
      items: [
        {
          type: 'doc',
          id: 'maps/others/maptiles/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'maps/others/maptiles/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
