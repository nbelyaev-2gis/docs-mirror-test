import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mapmatchingapi: [
    {
      type: 'category',
      label: 'Map Matching API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/map-matching/overview',
          label: 'Обзор',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/map-matching/reference/map_matching',
              label: '/map_matching/1.0.0',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/map-matching/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
