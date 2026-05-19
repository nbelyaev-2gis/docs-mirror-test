import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  'on-premise-gis-platform': [
    {
      type: 'category',
      label: 'GIS-платформа для сервера',
      items: [
        {
          type: 'category',
          label: 'Обзор',
          items: [
            {
              type: 'doc',
              id: 'on-premise-gis-platform/overview/summary',
              label: 'Обзор решения',
            },
            {
              type: 'category',
              label: 'Утилита 2GIS CLI',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise-gis-platform/overview/2gis-cli/overview',
                  label: 'Обзор утилиты',
                },
                {
                  type: 'doc',
                  id: 'on-premise-gis-platform/overview/2gis-cli/config',
                  label: 'Структура конфигурационного файла',
                },
                {
                  type: 'doc',
                  id: 'on-premise-gis-platform/overview/2gis-cli/usage',
                  label: 'Сценарии использования',
                },
                {
                  type: 'doc',
                  id: 'on-premise-gis-platform/overview/2gis-cli/help',
                  label: 'Справка по команде',
                },
                {
                  type: 'doc',
                  id: 'on-premise-gis-platform/overview/2gis-cli/releases',
                  label: 'Релизы утилиты',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise-gis-platform/overview/api-keys',
              label: 'Ключи и токены',
            },
            {
              type: 'doc',
              id: 'on-premise-gis-platform/overview/lifecycle',
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
              id: 'on-premise-gis-platform/architecture/solution-architecture',
              label: 'Общая архитектура',
            },
            {
              type: 'doc',
              id: 'on-premise-gis-platform/architecture/gis-platform-architecture',
              label: 'Архитектура GIS-платформы',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise-gis-platform/preparation',
          label: 'Подготовка к установке',
        },
        {
          type: 'category',
          label: 'Установка',
          items: [
            {
              type: 'doc',
              id: 'on-premise-gis-platform/install/requirements',
              label: 'Системные требования',
            },
            {
              type: 'doc',
              id: 'on-premise-gis-platform/install/installation',
              label: 'Установка',
              key: 'gis-platform-install',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise-gis-platform/update',
          label: 'Обновление',
        },
        {
          type: 'doc',
          id: 'on-premise-gis-platform/administering',
          label: 'Обслуживание',
        },
        {
          type: 'doc',
          id: 'on-premise-gis-platform/releases',
          label: 'Релизы',
        },
        {
          type: 'doc',
          id: 'on-premise-gis-platform/previous-releases',
          label: 'Предыдущие релизы',
        },
      ],
    },
  ],
};

export default sidebars;
