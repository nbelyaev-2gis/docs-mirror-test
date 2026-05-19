import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  geocoderAPI: [
    {
      type: 'category',
      label: 'Geocoder API',
      items: [
        {
          type: 'doc',
          id: 'api/search/geocoder/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/search/geocoder/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'category',
              label: 'Геокодирование',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/geocoder/reference/3.0/items/geocode/index',
                  label: '/3.0/items/geocode',
                },
                {
                  type: 'doc',
                  id: 'api/search/geocoder/reference/3.0/items/geocode/byip',
                  label: '/3.0/items/geocode/byip',
                },
                {
                  type: 'doc',
                  id: 'api/search/geocoder/reference/2.0/geo/search',
                  label: '/2.0/geo/search (deprecated)',
                },
              ],
            },
            {
              type: 'category',
              label: 'Получение геообъекта по id',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/geocoder/reference/2.0/geo/get',
                  label: '/2.0/geo/get (deprecated)',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/search/geocoder/tutorial',
          label: 'Интеграция в веб-приложение',
        },
        {
          type: 'doc',
          id: 'api/search/geocoder/troubleshooting',
          label: 'Решение проблем',
        },
        {
          type: 'doc',
          id: 'api/search/geocoder/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
