import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  fluttersdk: [
    {
      type: 'category',
      label: 'Flutter SDK',
      items: [
        {
          type: 'doc',
          id: 'flutter/sdk/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'flutter/sdk/start',
          label: 'Начало работы',
        },
        {
          type: 'category',
          label: 'Примеры',
          items: [
            {
              type: 'doc',
              id: 'flutter/sdk/examples/base',
              label: 'Общие принципы',
            },
            {
              type: 'doc',
              id: 'flutter/sdk/examples/map',
              label: 'Карта',
            },
            {
              type: 'doc',
              id: 'flutter/sdk/examples/map_styles',
              label: 'Стили карты',
            },
            {
              type: 'doc',
              id: 'flutter/sdk/examples/directory',
              label: 'Справочник',
            },
            {
              type: 'doc',
              id: 'flutter/sdk/examples/routing',
              label: 'Маршруты',
            },
            {
              type: 'doc',
              id: 'flutter/sdk/examples/navigation',
              label: 'Навигация',
            },
            {
              type: 'doc',
              id: 'flutter/sdk/examples/controls',
              label: 'UI–элементы',
            },
          ],
        },
        {
          type: 'category',
          label: 'Релизы',
          items: [
            {
              type: 'doc',
              id: 'flutter/sdk/releases/latest',
              label: 'Последние релизы',
            },
            {
              type: 'doc',
              id: 'flutter/sdk/releases/migration',
              label: 'Миграция с предыдущих версий',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
