import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  'on-premise-api-platform': [
    {
      type: 'category',
      label: 'API-платформа для сервера',
      items: [
        {
          type: 'category',
          label: 'Обзор',
          items: [
            {
              type: 'doc',
              id: 'on-premise-api-platform/overview/summary',
              label: 'Обзор решения',
              key: 'api-platform-overview',
            },
            {
              type: 'category',
              label: 'Утилита 2GIS CLI',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/overview/2gis-cli/overview',
                  label: 'Обзор утилиты',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/overview/2gis-cli/config',
                  label: 'Структура конфигурационного файла',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/overview/2gis-cli/usage',
                  label: 'Сценарии использования',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/overview/2gis-cli/help',
                  label: 'Справка по команде',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/overview/2gis-cli/releases',
                  label: 'Релизы утилиты',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/overview/api-keys',
              label: 'Ключи и токены',
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/overview/lifecycle',
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
              id: 'on-premise-api-platform/architecture/solution-architecture',
              label: 'Общая архитектура',
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/architecture/c4-diagrams',
              label: 'Модель C4',
            },
            {
              type: 'category',
              label: 'Базовые сервисы',
              key: 'core-architecture',
              items: [
                {
                  type: 'doc',
                  label: 'Сервис лицензий',
                  id: 'on-premise-api-platform/architecture/core/license',
                  key: 'api-platform-license-architecture',
                },
                {
                  type: 'doc',
                  label: 'Сервис API-ключей',
                  id: 'on-premise-api-platform/architecture/core/keys',
                  key: 'api-platform-keys-architecture',
                },
              ],
            },
            {
              type: 'category',
              label: 'API-платформа',
              key: 'api-platform-architecture',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/architecture/api-platform/statreceiver',
                  label: 'Сервис сбора статистики',
                  key: 'api-platform-architecture-statreceiver',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/architecture/api-platform/maps',
                  label: 'API карт',
                  key: 'api-platform-architecture-maps',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/architecture/api-platform/search',
                  label: 'API поиска',
                  key: 'api-platform-architecture-search',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/architecture/api-platform/navigation',
                  label: 'API навигации',
                  key: 'api-platform-architecture-navigation',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/architecture/api-platform/mobilesdk',
                  label: 'Мобильный SDK',
                  key: 'api-platform-architecture-mobilesdk',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/architecture/api-platform/trafficproxy',
                  label: 'Прокси для API пробок',
                  key: 'api-platform-architecture-trafficproxy',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/architecture/api-platform/platform',
                  label: 'Менеджер Платформы',
                  key: 'api-platform-architecture-platform',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise-api-platform/preparation',
          label: 'Подготовка к установке',
        },
        {
          type: 'category',
          label: 'Базовые сервисы',
          items: [
            {
              type: 'category',
              label: 'Установка',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/core/install/requirements',
                  label: 'Системные требования',
                  key: 'core-install-requirements',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/core/install/license',
                  label: 'Сервис лицензий',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/core/install/license-advanced',
                  label: 'Продвинутая установка сервиса лицензий',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/core/install/keys',
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
                  id: 'on-premise-api-platform/core/update/license',
                  label: 'Сервис лицензий',
                  key: 'core-update-license',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/core/update/keys',
                  label: 'Сервис API-ключей',
                  key: 'core-update-keys',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/core/administering',
              label: 'Обслуживание',
              key: 'core-administering',
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/core/keys',
              label: 'Управление доступом к API',
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/core/releases',
              label: 'Релизы',
              key: 'core-releases',
            },
          ],
        },
        {
          type: 'category',
          label: 'API-платформа',
          key: 'api-platform',
          items: [
            {
              type: 'category',
              label: 'Установка',
              key: 'api-platform-install',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/requirements',
                  label: 'Системные требования',
                  key: 'api-platform-install-requirements',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/statreceiver',
                  label: 'Сервис сбора статистики',
                  key: 'api-platform-install-statreceiver',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/maps',
                  label: 'API карт',
                  key: 'api-platform-install-maps',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/maps-advanced',
                  label: 'API карт (расширенные настройки)',
                  key: 'api-platform-install-maps-advanced',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/search',
                  label: 'API поиска',
                  key: 'api-platform-install-search',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/search-v8',
                  label: 'API поиска (обновлённая версия)',
                  key: 'api-platform-install-search-v8',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/navigation',
                  label: 'API навигации',
                  key: 'api-platform-install-navigation',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/mobilesdk',
                  label: 'Мобильный SDK',
                  key: 'api-platform-install-mobilesdk',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/trafficproxy',
                  label: 'Прокси для API пробок',
                  key: 'api-platform-install-trafficproxy',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/install/platform',
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
                  id: 'on-premise-api-platform/api-platform/update/statreceiver',
                  label: 'Сервис сбора статистики',
                  key: 'api-platform-update-statreceiver',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/update/maps',
                  label: 'API карт',
                  key: 'api-platform-update-maps',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/update/search',
                  label: 'API поиска',
                  key: 'api-platform-update-search',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/update/navigation',
                  label: 'API навигации',
                  key: 'api-platform-update-navigation',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/update/trafficproxy',
                  label: 'Прокси для API пробок',
                  key: 'api-platform-update-trafficproxy',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/update/platform',
                  label: 'Менеджер Платформы',
                  key: 'api-platform-update-platform',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/api-platform/administering',
              label: 'Обслуживание',
              key: 'api-platform-administering',
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/api-platform/license-expiration',
              label: 'Истечение лицензии',
              key: 'api-platform-license-expiration',
            },
            {
              type: 'category',
              label: 'Руководство пользователя',
              key: 'api-platform-user-guide',
              items: [
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/user-guide/platform-manager',
                  label: 'Работа с Менеджером Платформы',
                },
                {
                  type: 'doc',
                  id: 'on-premise-api-platform/api-platform/user-guide/vector-tiles',
                  label: 'Экспорт векторных тайлов',
                },
              ],
            },
            {
              type: 'doc',
              id: 'on-premise-api-platform/api-platform/releases',
              label: 'Релизы',
              key: 'api-platform-releases',
            },
          ],
        },
        {
          type: 'doc',
          id: 'on-premise-api-platform/previous-releases',
          label: 'Предыдущие релизы',
          key: 'api-platform-previous-releases',
        },
      ],
    },
  ],
};

export default sidebars;
