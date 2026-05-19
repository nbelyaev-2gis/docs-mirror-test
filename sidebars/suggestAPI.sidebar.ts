import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  suggestAPI: [
    {
      type: 'category',
      label: 'Suggest API',
      items: [
        {
          type: 'doc',
          id: 'api/search/suggest/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/search/suggest/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/search/suggest/reference/3.0/suggests',
              label: '/3.0/suggests',
            },
            {
              type: 'doc',
              id: 'api/search/suggest/reference/2.0/suggest/list',
              label: '/2.0/suggest/list (deprecated)',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/search/suggest/tutorial',
          label: 'Интеграция в веб-приложение',
        },
        {
          type: 'doc',
          id: 'api/search/suggest/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
