import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  regionsAPI: [
    {
      type: 'category',
      label: 'Regions API',
      items: [
        {
          type: 'doc',
          id: 'api/search/regions/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/search/regions/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'category',
              label: 'Поиск регионов по ключевым словам',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/regions/reference/2.0/region/search',
                  label: '/2.0/region/search',
                },
              ],
            },
            {
              type: 'category',
              label: 'Список всех регионов',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/regions/reference/2.0/region/list',
                  label: '/2.0/region/list',
                },
              ],
            },
            {
              type: 'category',
              label: 'Получение региона по id',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/regions/reference/2.0/region/get',
                  label: '/2.0/region/get',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/search/regions/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
