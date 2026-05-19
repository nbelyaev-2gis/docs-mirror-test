import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  directionsapi: [
    {
      type: 'category',
      label: 'Directions API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/directions/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/navigation/directions/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/directions/reference/directions_601',
              label: '/carrouting/6.0.1/global (limited)',
            },
            {
              type: 'doc',
              id: 'api/navigation/directions/reference/directions_600',
              label: '/carrouting/6.0.0/global (deprecated)',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/directions/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
