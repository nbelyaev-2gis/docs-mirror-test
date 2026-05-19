import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  aPI: [
    {
      type: 'category',
      label: 'Справочник API',
      items: [
        {
          type: 'category',
          label: 'Дашборд',
          items: [
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/dashboard/geo/items',
              label: '/3.0/dashboard/geo/items',
            },
          ],
        },
        {
          type: 'category',
          label: 'Маркеры',
          items: [
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/markers/clustered',
              label: '/3.0/markers/clustered',
            },
          ],
        },
        {
          type: 'category',
          label: 'Профиль',
          items: [
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/profile/data',
              label: '/3.0/profile/data',
            },
          ],
        },
        {
          type: 'category',
          label: 'Псевдонимы',
          items: [
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/aliases',
              label: '/3.0/aliases',
            },
          ],
        },
        {
          type: 'category',
          label: 'Реклама',
          items: [
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/ads/advise/gta/index',
              label: '/3.0/ads/advise/gta',
            },
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/ads/advise/gta/online/index',
              label: '/3.0/ads/advise/gta/online',
            },
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/ads/advise/gta/online/dashboard',
              label: '/3.0/ads/advise/gta/online/dashboard',
            },
          ],
        },
        {
          type: 'category',
          label: 'Рубрикатор',
          items: [
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/rubricator/get',
              label: '/3.0/rubricator/get',
            },
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/rubricator/list',
              label: '/3.0/rubricator/list',
            },
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/rubricator/dashboard',
              label: '/3.0/rubricator/dashboard',
            },
            {
              type: 'doc',
              id: 'api/search/catalog/reference/3.0/rubricator/map',
              label: '/3.0/rubricator/map',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
