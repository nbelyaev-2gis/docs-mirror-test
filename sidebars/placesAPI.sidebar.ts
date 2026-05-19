import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  placesAPI: [
    {
      type: 'category',
      label: 'Places API',
      items: [
        {
          type: 'doc',
          id: 'api/search/places/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/search/places/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'category',
              label: 'Поиск мест',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/places/reference/3.0/items/index',
                  label: '/3.0/items',
                },
                {
                  type: 'doc',
                  id: 'api/search/places/reference/2.0/catalog/branch/search',
                  label: '/2.0/catalog/branch/search (deprecated)',
                },
              ],
            },
            {
              type: 'category',
              label: 'Список компаний',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/places/reference/2.0/catalog/branch/list',
                  label: '/2.0/catalog/branch/list (deprecated)',
                },
                {
                  type: 'doc',
                  id: 'api/search/places/reference/3.0/items/byservicing',
                  label: '/3.0/items/byservicing',
                },
              ],
            },
            {
              type: 'category',
              label: 'Получение объекта по id',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/places/reference/3.0/items/byid',
                  label: '/3.0/items/byid',
                },
                {
                  type: 'doc',
                  id: 'api/search/places/reference/2.0/catalog/branch/get',
                  label: '/2.0/catalog/branch/get (deprecated)',
                },
              ],
            },
            {
              type: 'category',
              label: 'Поиск компаний по сайту',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/places/reference/3.0/items/bysite',
                  label: '/3.0/items/bysite',
                },
              ],
            },
            {
              type: 'category',
              label: 'Поиск компаний по номеру телефона',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/places/reference/3.0/items/byphone',
                  label: '/3.0/items/byphone',
                },
              ],
            },
            {
              type: 'category',
              label: 'Поиск компаний по ИНН',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/places/reference/3.0/items/byitin',
                  label: '/3.0/items/byitin',
                },
              ],
            },
            {
              type: 'category',
              label: 'Поиск компаний по торговой лицензии',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/places/reference/3.0/items/bytradelicense',
                  label: '/3.0/items/bytradelicense',
                },
              ],
            },
            {
              type: 'category',
              label: 'Поиск компаний по коду ФИАС',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/places/reference/3.0/items/byfias',
                  label: '/3.0/items/byfias',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/search/places/tutorial',
          label: 'Интеграция в веб-приложение',
        },
        {
          type: 'doc',
          id: 'api/search/places/troubleshooting',
          label: 'Решение проблем',
        },
        {
          type: 'doc',
          id: 'api/search/places/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
