import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  citylens: [
    {
      type: 'category',
      label: '2ГИС Ситискан',
      items: [
        {
          type: 'doc',
          id: 'citylens/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'citylens/start',
          label: 'Начало работы',
        },
        {
          type: 'category',
          label: 'Руководство администратора',
          items: [
            {
              type: 'doc',
              id: 'citylens/administrator/overview',
              label: 'Обзор инструментов',
            },
            {
              type: 'category',
              label: 'Планировщик задач',
              items: [
                {
                  type: 'doc',
                  id: 'citylens/administrator/planner/overview',
                  label: 'Обзор',
                  key: 'citylens-administrator-planner-overview',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/planner/territories',
                  label: 'Территории',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/planner/projects',
                  label: 'Проекты',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/planner/tasks',
                  label: 'Задачи',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/planner/drivers',
                  label: 'Водители',
                  key: 'citylens-administrator-planner-drivers',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/planner/users',
                  label: 'Пользователи',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/planner/styles',
                  label: 'Стиль карты',
                },
              ],
            },
            {
              type: 'category',
              label: '2ГИС Про для 2ГИС Ситискан',
              items: [
                {
                  type: 'doc',
                  id: 'citylens/administrator/pro/overview',
                  label: 'Обзор',
                  key: 'citylens-administrator-pro-overview',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/pro/frames',
                  label: 'Кадры',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/pro/objects',
                  label: 'Объекты',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/pro/drivers',
                  label: 'Водители',
                  key: 'citylens-administrator-pro-drivers',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/pro/tasks-planned',
                  label: 'Задачи (План)',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/pro/tasks-actual',
                  label: 'Объезды (Факт)',
                },
              ],
            },
            {
              type: 'category',
              label: 'CityLens Web',
              items: [
                {
                  type: 'doc',
                  id: 'citylens/administrator/web/overview',
                  label: 'Обзор',
                  key: 'citylens-administrator-web-overview',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/web/drivers',
                  label: 'Водители (Drivers)',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/web/tracks',
                  label: 'Треки (Tracks)',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/web/audit',
                  label: 'Аудит (Audit)',
                },
              ],
            },
            {
              type: 'category',
              label: 'Export API',
              items: [
                {
                  type: 'doc',
                  id: 'citylens/administrator/export/overview',
                  label: 'Обзор',
                  key: 'citylens-administrator-export-overview',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/export/examples',
                  label: 'Примеры',
                },
                {
                  type: 'doc',
                  id: 'citylens/administrator/export/reference',
                  label: 'Справочник API',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Руководство водителя',
          items: [
            {
              type: 'doc',
              id: 'citylens/driver/start',
              label: 'Начало работы',
              key: 'citylens-driver-start',
            },
            {
              type: 'doc',
              id: 'citylens/driver/devices',
              label: 'Требования к устройствам',
            },
            {
              type: 'doc',
              id: 'citylens/driver/requirements',
              label: 'Требования к записи',
            },
            {
              type: 'doc',
              id: 'citylens/driver/record',
              label: 'Запись данных',
            },
            {
              type: 'doc',
              id: 'citylens/driver/settings',
              label: 'Настройки',
            },
            {
              type: 'doc',
              id: 'citylens/driver/faq',
              label: 'Часто задаваемые вопросы',
            },
          ],
        },
        {
          type: 'doc',
          id: 'citylens/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
