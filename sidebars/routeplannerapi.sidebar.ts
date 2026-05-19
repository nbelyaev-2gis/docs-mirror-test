import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  routeplannerapi: [
    {
      type: 'category',
      label: 'Route Planner API (beta)',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/route-planner/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/navigation/route-planner/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/route-planner/reference/route-planner',
              label: '/route_planner/2.0.0',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/route-planner/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
