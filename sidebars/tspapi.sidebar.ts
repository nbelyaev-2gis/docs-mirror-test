import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tspapi: [
    {
      type: 'category',
      label: 'TSP API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/tsp/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/navigation/tsp/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/tsp/reference/create_110',
              label: '/logistics/vrp/1.1.0/create',
            },
            {
              type: 'doc',
              id: 'api/navigation/tsp/reference/status_110',
              label: '/logistics/vrp/1.1.0/status',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/tsp/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
