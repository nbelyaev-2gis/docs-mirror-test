import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  'on-premise-citylens': [
    {
      type: 'category',
      label: '2ГИС Ситискан для сервера',
      items: [
        {
          type: 'category',
          label: 'Обзор',
          items: [
            {
              type: 'doc',
              id: 'on-premise-citylens/overview/summary',
              label: 'Обзор решения',
            },
            {
              type: 'category',
              label: 'Утилита 2GIS CLI',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise-citylens/overview/2gis-cli/overview',
                  label: 'Обзор утилиты',
                },
                {
                  type: 'doc',
                  id: 'on-premise-citylens/overview/2gis-cli/config',
                  label: 'Структура конфигурационного файла',
                },
                {
                  type: 'doc',
                  id: 'on-premise-citylens/overview/2gis-cli/usage',
                  label: 'Сценарии использования',
                },
                {
                  type: 'doc',
                  id: 'on-premise-citylens/overview/2gis-cli/help',
                  label: 'Справка по команде',
                },
                {
                  type: 'doc',
                  id: 'on-premise-citylens/overview/2gis-cli/releases',
                  label: 'Релизы утилиты',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise-citylens/overview/api-keys',
              label: 'Ключи и токены',
            },
            {
              type: 'doc',
              id: 'on-premise-citylens/overview/lifecycle',
              label: 'Жизненный цикл артефактов установки',
            },
          ],
        },
        {
          type: 'category',
          label: 'Архитектура',
          items: [
            {
              type: 'doc',
              id: 'on-premise-citylens/architecture/solution-architecture',
              label: 'Общая архитектура',
            },
            {
              type: 'doc',
              id: 'on-premise-citylens/architecture/c4-diagrams',
              label: 'Модель C4',
            },
            {
              type: 'doc',
              id: 'on-premise-citylens/architecture/citylens-architecture',
              label: 'Архитектура 2ГИС Ситискан',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise-citylens/preparation',
          label: 'Подготовка к установке',
        },
        {
          type: 'category',
          label: 'Установка',
          key: 'citylens-install',
          items: [
            {
              type: 'doc',
              id: 'on-premise-citylens/install/requirements',
              label: 'Системные требования',
            },
            {
              type: 'doc',
              id: 'on-premise-citylens/install/installation',
              label: 'Установка',
            },
            {
              type: 'doc',
              id: 'on-premise-citylens/install/authentication',
              label: 'Настройка аутентификации',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise-citylens/update',
          label: 'Обновление',
        },
        {
          type: 'doc',
          id: 'on-premise-citylens/administering',
          label: 'Обслуживание',
        },
        {
          type: 'doc',
          id: 'on-premise-citylens/license-expiration',
          label: 'Истечение лицензии',
        },
        {
          type: 'doc',
          id: 'on-premise-citylens/releases',
          label: 'Релизы',
        },
        {
          type: 'doc',
          id: 'on-premise-citylens/previous-releases',
          label: 'Предыдущие релизы',
        },
      ],
    },
  ],
};

export default sidebars;
