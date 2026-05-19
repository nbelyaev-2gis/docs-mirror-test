import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  'on-premise-pro': [
    {
      type: 'category',
      label: '2ГИС Про для сервера',
      items: [
        {
          type: 'category',
          label: 'Обзор',
          items: [
            {
              type: 'doc',
              id: 'on-premise-pro/overview/summary',
              label: 'Обзор решения',
            },
            {
              type: 'category',
              label: 'Утилита 2GIS CLI',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise-pro/overview/2gis-cli/overview',
                  label: 'Обзор утилиты',
                },
                {
                  type: 'doc',
                  id: 'on-premise-pro/overview/2gis-cli/config',
                  label: 'Структура конфигурационного файла',
                },
                {
                  type: 'doc',
                  id: 'on-premise-pro/overview/2gis-cli/usage',
                  label: 'Сценарии использования',
                },
                {
                  type: 'doc',
                  id: 'on-premise-pro/overview/2gis-cli/help',
                  label: 'Справка по команде',
                },
                {
                  type: 'doc',
                  id: 'on-premise-pro/overview/2gis-cli/releases',
                  label: 'Релизы утилиты',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise-pro/overview/api-keys',
              label: 'Ключи и токены',
            },
            {
              type: 'doc',
              id: 'on-premise-pro/overview/lifecycle',
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
              id: 'on-premise-pro/architecture/solution-architecture',
              label: 'Общая архитектура',
            },
            {
              type: 'doc',
              id: 'on-premise-pro/architecture/c4-diagrams',
              label: 'Модель C4',
            },
            {
              type: 'doc',
              id: 'on-premise-pro/architecture/pro-architecture',
              label: 'Архитектура 2ГИС Про',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise-pro/preparation',
          label: 'Подготовка к установке',
        },
        {
          type: 'category',
          label: 'Установка',
          key: 'pro-install',
          items: [
            {
              type: 'doc',
              id: 'on-premise-pro/install/requirements',
              label: 'Системные требования',
            },
            {
              type: 'doc',
              id: 'on-premise-pro/install/installation',
              label: 'Установка',
            },
            {
              type: 'doc',
              id: 'on-premise-pro/install/authentication',
              label: 'Настройка аутентификации',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise-pro/update',
          label: 'Обновление',
        },
        {
          type: 'doc',
          id: 'on-premise-pro/administering',
          label: 'Обслуживание',
        },
        {
          type: 'doc',
          id: 'on-premise-pro/license-expiration',
          label: 'Истечение лицензии',
        },
        {
          type: 'doc',
          id: 'on-premise-pro/releases',
          label: 'Релизы',
        },
        {
          type: 'doc',
          id: 'on-premise-pro/previous-releases',
          label: 'Предыдущие релизы',
        },
      ],
    },
  ],
};

export default sidebars;
