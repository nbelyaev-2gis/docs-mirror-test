import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';

import { OnPremiseHero } from '../../theme/components/OnPremiseHero';
import { Navigation } from '../../theme/components/Navigation';
import { NavigationTileItem } from '../../theme/components/Navigation/types';

import s from '../index.module.css';
import { useBrand } from '@shared/hooks/useBrand';
import { useMemo } from 'react';

export default function OnPremise() {
  const brand = useBrand();

  const onPremNav = useMemo(
    (): NavigationTileItem[] => [
      {
        items: [
          {
            label: <Translate>Обзор решения</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'Преимущества установки сервисов {brand} в вашей инфраструктуре'}
              </Translate>
            ),
            docId: 'on-premise/overview',
          },
          {
            label: <Translate>Архитектура</Translate>,
            description: <Translate>Схема работы комплекса в приватной сети</Translate>,
            docId: 'on-premise/overview/architecture',
          },
          {
            label: <Translate>Модель С4</Translate>,
            description: <Translate>Схемы архитектуры в нотации C4</Translate>,
            docId: 'on-premise/overview/architecture/c4-diagrams',
          },
          {
            label: <Translate>Утилита 2GIS CLI</Translate>,
            description: (
              <Translate>Работа с артефактами установки сервисов через утилиту</Translate>
            ),
            docId: 'on-premise/overview/2gis-cli/overview',
          },
          {
            label: <Translate>Ключи и токены</Translate>,
            description: <Translate>Типы ключей и токенов для работы комплекса</Translate>,
            docId: 'on-premise/overview/api-keys',
          },
          {
            label: <Translate>Жизненный цикл артефактов установки</Translate>,
            description: (
              <Translate>Детали процессов установки и обновления сервисов комплекса</Translate>
            ),
            docId: 'on-premise/overview/lifecycle',
          },
        ],
      },
      {
        label: 'Перед началом работы',
        icon: 'installation',
        items: [
          {
            label: <Translate>Подготовка к установке</Translate>,
            description: <Translate>Подготовка инфраструктуры к установке комплекса</Translate>,
            docId: 'on-premise/preparation',
          },
        ],
      },
      {
        label: 'Базовые сервисы',
        icon: 'architecture',
        items: [
          {
            label: <Translate>Обзор</Translate>,
            description: <Translate>Обзор базовых сервисов комплекса</Translate>,
            docId: 'on-premise/core/overview',
          },
          {
            label: <Translate>Руководство администратора</Translate>,
            description: (
              <Translate>
                Архитектура, установка, обновление и обслуживание базовых сервисов
              </Translate>
            ),
            docId: 'on-premise/core/admin-guide/architecture/license',
          },
          {
            label: <Translate>Релизы</Translate>,
            description: <Translate>Содержание версий базовых сервисов</Translate>,
            docId: 'on-premise/core/releases',
          },
        ],
      },
      {
        label: 'API-платформа',
        icon: 'map',
        items: [
          {
            label: <Translate>Обзор</Translate>,
            description: <Translate>О продукте API-платформа для сервера</Translate>,
            docId: 'on-premise/api-platform/overview',
          },
          {
            label: <Translate>Руководство администратора</Translate>,
            description: (
              <Translate>
                Архитектура, установка, обновление и обслуживание API-платформы для сервера
              </Translate>
            ),
            docId: 'on-premise/api-platform/admin-guide/architecture/statreceiver',
          },
          {
            label: <Translate>Руководство пользователя</Translate>,
            description: <Translate>Работа с установленной API-платформой</Translate>,
            docId: 'on-premise/api-platform/user-guide/platform-manager',
          },
          {
            label: <Translate>Релизы</Translate>,
            description: <Translate>Содержание версий API-платформы для сервера</Translate>,
            docId: 'on-premise/api-platform/releases',
          },
        ],
      },
      {
        label: '{brand} Про',
        icon: 'pro',
        items: [
          {
            label: <Translate>Обзор</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'О продукте {brand} Про для сервера'}
              </Translate>
            ),
            docId: 'on-premise/pro/overview',
          },
          {
            label: <Translate>Руководство администратора</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'Архитектура, установка, обновление и обслуживание {brand} Про для сервера'}
              </Translate>
            ),
            docId: 'on-premise/pro/admin-guide/architecture',
          },
          {
            label: <Translate>Руководство пользователя</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'Работа с установленным {brand} Про для сервера'}
              </Translate>
            ),
            docId: 'on-premise/pro/user-guide',
          },
          {
            label: <Translate>Релизы</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'Содержание версий {brand} Про для сервера'}
              </Translate>
            ),
            docId: 'on-premise/pro/releases',
          },
        ],
      },
      {
        label: '{brand} Ситискан',
        icon: 'lens',
        items: [
          {
            label: <Translate>Обзор</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'О продукте {brand} Ситискан для сервера'}
              </Translate>
            ),
            docId: 'on-premise/citylens/overview',
          },
          {
            label: <Translate>Руководство администратора</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'Архитектура, установка, обновление и обслуживание {brand} Ситискан для сервера'}
              </Translate>
            ),
            docId: 'on-premise/citylens/admin-guide/architecture',
          },
          {
            label: <Translate>Руководство пользователя</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'Работа с установленным {brand} Ситискан для сервера'}
              </Translate>
            ),
            docId: 'on-premise/citylens/user-guide',
          },
          {
            label: <Translate>Релизы</Translate>,
            description: (
              <Translate values={{ brand: brand.label }}>
                {'Содержание версий {brand} Ситискан для сервера'}
              </Translate>
            ),
            docId: 'on-premise/citylens/releases',
          },
        ],
      },
      {
        label: 'GIS-платформа',
        icon: 'administration',
        items: [
          {
            label: <Translate>Обзор</Translate>,
            description: <Translate>О продукте GIS-платформа для сервера</Translate>,
            docId: 'on-premise/gis-platform/overview',
          },
          {
            label: <Translate>Руководство администратора</Translate>,
            description: (
              <Translate>
                Архитектура, установка, обновление и обслуживание GIS-платформы для сервера
              </Translate>
            ),
            docId: 'on-premise/gis-platform/admin-guide/architecture',
          },
          {
            label: <Translate>Релизы</Translate>,
            description: <Translate>Содержание версий GIS-платформы для сервера</Translate>,
            docId: 'on-premise/gis-platform/releases',
          },
        ],
      },
      {
        label: 'Архив',
        icon: 'settings',
        items: [
          {
            label: <Translate>Предыдущие релизы</Translate>,
            description: <Translate>Содержание предыдущих версий комплекса</Translate>,
            docId: 'on-premise/previous-releases',
          },
        ],
      },
    ],
    [brand],
  );

  return (
    <Layout>
      <main className={s.mainWrapper}>
        <OnPremiseHero />
        <Navigation items={onPremNav} />
      </main>
    </Layout>
  );
}
