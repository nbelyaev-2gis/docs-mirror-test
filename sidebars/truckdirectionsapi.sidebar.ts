import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  truckdirectionsapi: [
    {
      type: 'category',
      label: 'Truck Directions API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/truck-directions/overview',
          label: 'Обзор',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/truck-directions/reference/truck_601',
              label: '/truck/6.0.1/global (limited) ',
            },
            {
              type: 'doc',
              id: 'api/navigation/truck-directions/reference/truck_600',
              label: '/truck/6.0.0/global (deprecated)',
            },
            {
              type: 'doc',
              id: 'api/navigation/truck-directions/reference/truck_passes',
              label: '/truck_passes/1.0.0/global',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/truck-directions/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
