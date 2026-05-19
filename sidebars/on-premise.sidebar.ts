import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  'on-premise': [
    {
      type: 'category',
      label: 'On‑Premise',
      items: [
        {
          type: 'category',
          label: 'Обзор',
          items: [
            {
              type: 'doc',
              id: 'on-premise/overview/overview',
              label: 'Компоненты решения',
            },
            {
              type: 'category',
              label: 'Архитектура',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise/overview/architecture/architecture',
                  label: 'Общая архитектура',
                },
                {
                  type: 'doc',
                  id: 'on-premise/overview/architecture/c4-diagrams',
                  label: 'Модель С4',
                },
              ],
            },
            {
              type: 'category',
              label: 'Утилита 2GIS CLI',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise/overview/2gis-cli/overview',
                  label: 'Обзор утилиты',
                },
                {
                  type: 'doc',
                  id: 'on-premise/overview/2gis-cli/config',
                  label: 'Структура конфигурационного файла',
                },
                {
                  type: 'doc',
                  id: 'on-premise/overview/2gis-cli/usage',
                  label: 'Сценарии использования',
                },
                {
                  type: 'doc',
                  id: 'on-premise/overview/2gis-cli/help',
                  label: 'Справка по команде',
                },
                {
                  type: 'doc',
                  id: 'on-premise/overview/2gis-cli/releases',
                  label: 'Релизы',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise/overview/api-keys',
              label: 'Ключи и токены',
            },
            {
              type: 'doc',
              id: 'on-premise/overview/lifecycle',
              label: 'Жизненный цикл артефактов установки',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise/preparation',
          label: 'Подготовка к установке',
        },
        {
          type: 'category',
          label: 'Базовые сервисы',
          items: [
            {
              type: 'doc',
              id: 'on-premise/core/overview',
              label: 'Обзор',
              key: 'core-overview',
            },
            {
              type: 'category',
              label: 'Руководство администратора',
              key: 'core-admin-guide',
              items: [
                {
                  type: 'category',
                  label: 'Архитектура',
                  key: 'core-architecture',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/core/admin-guide/architecture/license',
                      label: 'Сервис лицензий',
                      key: 'core-architecture-license',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/core/admin-guide/architecture/keys',
                      label: 'Сервис API-ключей',
                      key: 'core-architecture-keys',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Установка',
                  key: 'core-install',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/core/admin-guide/install/requirements',
                      label: 'Системные требования',
                      key: 'core-install-requirements',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/core/admin-guide/install/license',
                      label: 'Сервис лицензий',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/core/admin-guide/install/license-advanced',
                      label: 'Продвинутая установка сервиса лицензий',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/core/admin-guide/install/keys',
                      label: 'Сервис API-ключей',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Обновление',
                  key: 'core-update',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/core/admin-guide/update/license',
                      label: 'Сервис лицензий',
                      key: 'core-update-license',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/core/admin-guide/update/keys',
                      label: 'Сервис API-ключей',
                      key: 'core-update-keys',
                    },
                  ],
                },
                {
                  type: 'doc',
                  id: 'on-premise/core/admin-guide/administering',
                  label: 'Обслуживание',
                  key: 'core-administering',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise/core/keys',
              label: 'Управление доступом к API',
              key: 'core-api-access',
            },
            {
              type: 'doc',
              id: 'on-premise/core/releases',
              label: 'Релизы',
              key: 'core-releases',
            },
          ],
        },
        {
          type: 'category',
          label: 'API-платформа',
          items: [
            {
              type: 'doc',
              id: 'on-premise/api-platform/overview',
              label: 'Обзор',
              key: 'api-platform-overview',
            },
            {
              type: 'category',
              label: 'Руководство администратора',
              key: 'api-platform-admin-guide',
              items: [
                {
                  type: 'category',
                  label: 'Архитектура',
                  key: 'api-platform-architecture',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/architecture/statreceiver',
                      label: 'Сервис сбора статистики',
                      key: 'api-platform-architecture-statreceiver',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/architecture/maps',
                      label: 'API карт',
                      key: 'api-platform-architecture-maps',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/architecture/search',
                      label: 'API поиска',
                      key: 'api-platform-architecture-search',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/architecture/navigation',
                      label: 'API навигации',
                      key: 'api-platform-architecture-navigation',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/architecture/mobilesdk',
                      label: 'Мобильный SDK',
                      key: 'api-platform-architecture-mobilesdk',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/architecture/trafficproxy',
                      label: 'Прокси для API пробок',
                      key: 'api-platform-architecture-trafficproxy',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/architecture/platform',
                      label: 'Менеджер Платформы',
                      key: 'api-platform-architecture-platform',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Установка',
                  key: 'api-platform-install',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/requirements',
                      label: 'Системные требования',
                      key: 'api-platform-install-requirements',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/statreceiver',
                      label: 'Сервис сбора статистики',
                      key: 'api-platform-install-statreceiver',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/maps',
                      label: 'API карт',
                      key: 'api-platform-install-maps',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/maps-advanced',
                      label: 'API карт (расширенные настройки)',
                      key: 'api-platform-install-maps-advanced',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/search',
                      label: 'API поиска',
                      key: 'api-platform-install-search',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/search-v8',
                      label: 'API поиска (обновлённая версия)',
                      key: 'api-platform-install-search-v8',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/navigation',
                      label: 'API навигации',
                      key: 'api-platform-install-navigation',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/mobilesdk',
                      label: 'Мобильный SDK',
                      key: 'api-platform-install-mobilesdk',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/trafficproxy',
                      label: 'Прокси для API пробок',
                      key: 'api-platform-install-trafficproxy',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/install/platform',
                      label: 'Менеджер Платформы',
                      key: 'api-platform-install-platform',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Обновление',
                  key: 'api-platform-update',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/update/statreceiver',
                      label: 'Сервис сбора статистики',
                      key: 'api-platform-update-statreceiver',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/update/maps',
                      label: 'API карт',
                      key: 'api-platform-update-maps',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/update/search',
                      label: 'API поиска',
                      key: 'api-platform-update-search',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/update/navigation',
                      label: 'API навигации',
                      key: 'api-platform-update-navigation',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/update/trafficproxy',
                      label: 'Прокси для API пробок',
                      key: 'api-platform-update-trafficproxy',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/api-platform/admin-guide/update/platform',
                      label: 'Менеджер Платформы',
                      key: 'api-platform-update-platform',
                    },
                  ],
                },
                {
                  type: 'doc',
                  id: 'on-premise/api-platform/admin-guide/administering',
                  label: 'Обслуживание',
                  key: 'api-platform-administering',
                },
                {
                  type: 'doc',
                  id: 'on-premise/api-platform/admin-guide/license-expiration',
                  label: 'Истечение лицензии',
                  key: 'api-platform-license-expiration',
                },
              ],
            },
            {
              type: 'category',
              label: 'Руководство пользователя',
              key: 'api-platform-user-guide',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise/api-platform/user-guide/platform-manager',
                  label: 'Работа с Менеджером Платформы',
                },
                {
                  type: 'doc',
                  id: 'on-premise/api-platform/user-guide/vector-tiles',
                  label: 'Экспорт векторных тайлов',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise/api-platform/releases',
              label: 'Релизы',
              key: 'api-platform-releases',
            },
          ],
        },
        {
          type: 'category',
          label: '2ГИС Про',
          items: [
            {
              type: 'doc',
              id: 'on-premise/pro/overview',
              label: 'Обзор',
              key: 'pro-overview',
            },
            {
              type: 'category',
              label: 'Руководство администратора',
              key: 'pro-admin-guide',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise/pro/admin-guide/architecture',
                  label: 'Архитектура',
                  key: 'pro-architecture',
                },
                {
                  type: 'category',
                  label: 'Установка',
                  key: 'pro-install',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/pro/admin-guide/install/requirements',
                      label: 'Системные требования',
                      key: 'pro-install-requirements',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/pro/admin-guide/install/install',
                      label: 'Установка',
                      key: 'pro-install-install',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/pro/admin-guide/install/authentication',
                      label: 'Настройка аутентификации',
                      key: 'pro-install-authentication',
                    },
                  ],
                },
                {
                  type: 'doc',
                  id: 'on-premise/pro/admin-guide/update',
                  label: 'Обновление',
                  key: 'pro-install-update',
                },
                {
                  type: 'doc',
                  id: 'on-premise/pro/admin-guide/administering',
                  label: 'Обслуживание',
                  key: 'pro-administering',
                },
                {
                  type: 'doc',
                  id: 'on-premise/pro/admin-guide/license-expiration',
                  label: 'Истечение лицензии',
                  key: 'pro-license-expiration',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise/pro/user-guide',
              label: 'Руководство пользователя',
              key: 'pro-user-guide',
            },
            {
              type: 'doc',
              id: 'on-premise/pro/releases',
              label: 'Релизы',
              key: 'pro-releases',
            },
          ],
        },
        {
          type: 'category',
          label: '2ГИС Ситискан',
          items: [
            {
              type: 'doc',
              id: 'on-premise/citylens/overview',
              label: 'Обзор',
              key: 'citylens-overview',
            },
            {
              type: 'category',
              label: 'Руководство администратора',
              key: 'citylens-admin-guide',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise/citylens/admin-guide/architecture',
                  label: 'Архитектура',
                  key: 'citylens-architecture',
                },
                {
                  type: 'category',
                  label: 'Установка',
                  key: 'citylens-install',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/citylens/admin-guide/install/requirements',
                      label: 'Системные требования',
                      key: 'citylens-install-requirements',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/citylens/admin-guide/install/install',
                      label: 'Установка',
                      key: 'citylens-install-install',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/citylens/admin-guide/install/authentication',
                      label: 'Настройка аутентификации',
                      key: 'citylens-install-authentication',
                    },
                  ],
                },
                {
                  type: 'doc',
                  id: 'on-premise/citylens/admin-guide/update',
                  label: 'Обновление',
                  key: 'citylens-install-update',
                },
                {
                  type: 'doc',
                  id: 'on-premise/citylens/admin-guide/administering',
                  label: 'Обслуживание',
                  key: 'citylens-administering',
                },
                {
                  type: 'doc',
                  id: 'on-premise/citylens/admin-guide/license-expiration',
                  label: 'Истечение лицензии',
                  key: 'citylens-license-expiration',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise/citylens/user-guide',
              label: 'Руководство пользователя',
              key: 'citylens-user-guide',
            },
            {
              type: 'doc',
              id: 'on-premise/citylens/releases',
              label: 'Релизы',
              key: 'citylens-releases',
            },
          ],
        },
        {
          type: 'category',
          label: 'GIS-платформа',
          items: [
            {
              type: 'doc',
              id: 'on-premise/gis-platform/overview',
              label: 'Обзор',
              key: 'gis-platform-overview',
            },
            {
              type: 'category',
              label: 'Руководство администратора',
              key: 'gis-platform-admin-guide',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise/gis-platform/admin-guide/architecture',
                  label: 'Архитектура',
                  key: 'gis-platform-architecture',
                },
                {
                  type: 'category',
                  label: 'Установка',
                  key: 'gis-platform-install',
                  items: [
                    {
                      type: 'doc',
                      id: 'on-premise/gis-platform/admin-guide/install/requirements',
                      label: 'Системные требования',
                      key: 'gis-platform-install-requirements',
                    },
                    {
                      type: 'doc',
                      id: 'on-premise/gis-platform/admin-guide/install/install',
                      label: 'Установка',
                      key: 'gis-platform-install-install',
                    },
                  ],
                },
                {
                  type: 'doc',
                  id: 'on-premise/gis-platform/admin-guide/update',
                  label: 'Обновление',
                  key: 'gis-platform-install-update',
                },
                {
                  type: 'doc',
                  id: 'on-premise/gis-platform/admin-guide/administering',
                  label: 'Обслуживание',
                  key: 'gis-platform-administering',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise/gis-platform/releases',
              label: 'Релизы',
              key: 'gis-platform-releases',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise/previous-releases',
          label: 'Предыдущие релизы',
          key: 'previous-releases',
        },
      ],
    },
  ],
};

export default sidebars;
