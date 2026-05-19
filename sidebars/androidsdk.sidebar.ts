import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { createSDKSidebar } from './lib/createSDKSidebar';

const sidebars: SidebarsConfig = {
  androidsdk: [
    {
      type: 'category',
      label: 'Android SDK',
      items: [
        {
          type: 'doc',
          id: 'android/sdk/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'android/sdk/start',
          label: 'Начало работы',
        },
        {
          type: 'category',
          label: 'Примеры',
          items: [
            {
              type: 'doc',
              id: 'android/sdk/examples/base',
              label: 'Общие принципы',
            },
            {
              type: 'doc',
              id: 'android/sdk/examples/map',
              label: 'Карта',
            },
            {
              type: 'doc',
              id: 'android/sdk/examples/map_styles',
              label: 'Стили карты',
            },
            {
              type: 'doc',
              id: 'android/sdk/examples/directory',
              label: 'Справочник',
            },
            {
              type: 'doc',
              id: 'android/sdk/examples/routing',
              label: 'Маршруты',
            },
            {
              type: 'doc',
              id: 'android/sdk/examples/navigation',
              label: 'Навигация',
            },
            {
              type: 'category',
              label: 'UI–элементы',
              items: [
                {
                  type: 'doc',
                  id: 'android/sdk/examples/controls/view',
                  label: 'Android View',
                },
                {
                  type: 'doc',
                  id: 'android/sdk/examples/controls/compose',
                  label: 'Android Compose',
                },
              ],
            },
          ],
        },
        ...createSDKSidebar('androidsdk'),
        {
          type: 'category',
          label: 'Релизы',
          items: [
            {
              type: 'doc',
              id: 'android/sdk/releases/latest',
              label: 'Последние релизы',
            },
            {
              type: 'doc',
              id: 'android/sdk/releases/previous',
              label: 'Предыдущие релизы',
            },
            {
              type: 'doc',
              id: 'android/sdk/releases/migration',
              label: 'Миграция с предыдущих версий',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
