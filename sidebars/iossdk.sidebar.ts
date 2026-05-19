import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { createSDKSidebar } from './lib/createSDKSidebar';

const sidebars: SidebarsConfig = {
  iossdk: [
    {
      type: 'category',
      label: 'iOS SDK',
      items: [
        {
          type: 'doc',
          id: 'ios/sdk/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'ios/sdk/start',
          label: 'Начало работы',
        },
        {
          type: 'category',
          label: 'Примеры',
          items: [
            {
              type: 'doc',
              id: 'ios/sdk/examples/base',
              label: 'Общие принципы',
            },
            {
              type: 'doc',
              id: 'ios/sdk/examples/map',
              label: 'Карта',
            },
            {
              type: 'doc',
              id: 'ios/sdk/examples/map_styles',
              label: 'Стили карты',
            },
            {
              type: 'doc',
              id: 'ios/sdk/examples/directory',
              label: 'Справочник',
            },
            {
              type: 'doc',
              id: 'ios/sdk/examples/routing',
              label: 'Маршруты',
            },
            {
              type: 'doc',
              id: 'ios/sdk/examples/navigation',
              label: 'Навигация',
            },
            {
              type: 'category',
              label: 'UI–элементы',
              items: [
                {
                  type: 'doc',
                  id: 'ios/sdk/examples/controls/uikit',
                  label: 'UIKit',
                },
                {
                  type: 'doc',
                  id: 'ios/sdk/examples/controls/swiftui',
                  label: 'SwiftUI',
                },
              ],
            },
          ],
        },
        ...createSDKSidebar('iossdk'),
        {
          type: 'category',
          label: 'Релизы',
          items: [
            {
              type: 'doc',
              id: 'ios/sdk/releases/latest',
              label: 'Последние релизы',
            },
            {
              type: 'doc',
              id: 'ios/sdk/releases/previous',
              label: 'Предыдущие релизы',
            },
            {
              type: 'doc',
              id: 'ios/sdk/releases/migration',
              label: 'Миграция с предыдущих версий',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
