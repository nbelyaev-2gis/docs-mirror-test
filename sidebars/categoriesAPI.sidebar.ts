import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  categoriesAPI: [
    {
      type: 'category',
      label: 'Categories API',
      items: [
        {
          type: 'doc',
          id: 'api/search/categories/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/search/categories/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'category',
              label: 'Поиск категорий по ключевым словам',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/categories/reference/2.0/catalog/rubric/search',
                  label: '/2.0/catalog/rubric/search',
                },
              ],
            },
            {
              type: 'category',
              label: 'Список всех категорий',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/categories/reference/2.0/catalog/rubric/list',
                  label: '/2.0/catalog/rubric/list',
                },
              ],
            },
            {
              type: 'category',
              label: 'Получение категории по id',
              items: [
                {
                  type: 'doc',
                  id: 'api/search/categories/reference/2.0/catalog/rubric/get',
                  label: '/2.0/catalog/rubric/get',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/search/categories/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
