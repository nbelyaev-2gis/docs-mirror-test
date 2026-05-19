import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  markersAPI: [
    {
      type: 'category',
      label: 'Markers API',
      items: [
        {
          type: 'doc',
          id: 'api/search/markers/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/search/markers/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/search/markers/reference/3.0/markers',
              label: '/3.0/markers',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/search/markers/tutorial',
          label: 'Интеграция в веб-приложение',
        },
        {
          type: 'doc',
          id: 'api/search/markers/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
