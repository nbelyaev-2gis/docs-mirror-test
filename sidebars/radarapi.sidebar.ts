import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  radarapi: [
    {
      type: 'category',
      label: 'Radar API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/radar/overview',
          label: 'Обзор',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/radar/reference/geolocation_v2',
              label: '/v2/geolocation',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/radar/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
