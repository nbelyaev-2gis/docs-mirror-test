import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  'platform-manager': [
    {
      type: 'category',
      label: 'Личный кабинет',
      items: [
        {
          type: 'doc',
          id: 'platform-manager/overview',
          label: 'Обзор',
        },
        {
          type: 'category',
          label: 'Подписка',
          items: [
            {
              type: 'doc',
              id: 'platform-manager/subscription/services',
              label: 'Сервисы в подписке',
            },
            {
              type: 'doc',
              id: 'platform-manager/subscription/pricing',
              label: 'Тарифы',
            },
            {
              type: 'doc',
              id: 'platform-manager/subscription/purchase',
              label: 'Оформление и изменение подписки',
            },
            {
              type: 'doc',
              id: 'platform-manager/subscription/keys',
              label: 'Создание ключей доступа',
            },
            {
              type: 'doc',
              id: 'platform-manager/subscription/managing-keys',
              label: 'Управление ключами доступа',
            },
            {
              type: 'doc',
              id: 'platform-manager/subscription/statistics',
              label: 'Статистика',
            },
          ],
        },
        {
          type: 'doc',
          id: 'platform-manager/users',
          label: 'Управление компаниями и пользователями',
        },
        {
          type: 'doc',
          id: 'platform-manager/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
