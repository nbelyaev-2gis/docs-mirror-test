import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  geoflow: [
    {
      type: 'category',
      label: '2ГИС ГеоПоток',
      items: [
        {
          type: 'doc',
          id: 'geoflow/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'geoflow/start',
          label: 'Начало работы',
        },
        {
          type: 'category',
          label: 'Руководство администратора',
          items: [
            {
              type: 'doc',
              id: 'geoflow/administrator/overview',
              label: 'Обзор',
              key: 'geoflow-admin-overview',
            },
            {
              type: 'category',
              label: 'Управление',
              items: [
                {
                  type: 'doc',
                  id: 'geoflow/administrator/managing/users',
                  label: 'Пользователи',
                },
                {
                  type: 'doc',
                  id: 'geoflow/administrator/managing/templates',
                  label: 'Шаблоны агентов',
                },
                {
                  type: 'doc',
                  id: 'geoflow/administrator/managing/agents',
                  label: 'Агенты',
                },
                {
                  type: 'doc',
                  id: 'geoflow/administrator/managing/directories',
                  label: 'Справочники',
                },
              ],
            },
            {
              type: 'category',
              label: 'Планирование',
              items: [
                {
                  type: 'doc',
                  id: 'geoflow/administrator/planning/shifts',
                  label: 'Смены',
                },
              ],
            },
            {
              type: 'doc',
              id: 'geoflow/administrator/monitoring',
              label: 'Мониторинг',
            },
            {
              type: 'doc',
              id: 'geoflow/administrator/styles',
              label: 'Стиль карты',
            },
          ],
        },
        {
          type: 'category',
          label: 'Руководство сотрудника',
          items: [
            {
              type: 'doc',
              id: 'geoflow/operator/start',
              label: 'Начало работы',
              key: 'geoflow-employee-start',
            },
            {
              type: 'doc',
              id: 'geoflow/operator/map',
              label: 'Работа с картой',
            },
            {
              type: 'doc',
              id: 'geoflow/operator/settings',
              label: 'Настройки приложения',
            },
          ],
        },
        {
          type: 'doc',
          id: 'geoflow/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
