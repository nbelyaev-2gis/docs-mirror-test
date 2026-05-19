import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  routingapi: [
    {
      type: 'category',
      label: 'Routing API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/routing/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/navigation/routing/start',
          label: 'Начало работы',
        },
        {
          type: 'category',
          label: 'Примеры',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/routing/examples/overview',
              label: 'Обзор примеров',
            },
            {
              type: 'doc',
              id: 'api/navigation/routing/examples/points',
              label: 'Точки маршрута',
            },
            {
              type: 'doc',
              id: 'api/navigation/routing/examples/types',
              label: 'Способы передвижения',
            },
            {
              type: 'doc',
              id: 'api/navigation/routing/examples/options',
              label: 'Варианты маршрута',
            },
            {
              type: 'doc',
              id: 'api/navigation/routing/examples/routing',
              label: 'Построение маршрутов',
            },
            {
              type: 'doc',
              id: 'api/navigation/routing/examples/special',
              label: 'Специальные возможности',
            },
          ],
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/routing/reference/routing',
              label: '/routing/7.0.0/global',
            },
            {
              type: 'doc',
              id: 'api/navigation/routing/reference/public_transport',
              label: '/public_transport/2.0',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/routing/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
