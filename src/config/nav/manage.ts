import { translate } from '@docusaurus/Translate';
import type { NavBrand } from './types';
import { resolveLink } from './utils';

export const getApiPlatformManagementInfo = (brand: NavBrand) =>
  ({
    PLATFORM_MANAGER: {
      title: translate({ message: 'Менеджер Платформы' }),
      description: translate(
        {
          message: 'Личный кабинет для управления доступом к API {brand}',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'realty',
      link: resolveLink(
        {
          '2gis': { ru: '/platform-manager/overview', en: '/en/platform-manager/overview' },
          urbi: { en: '/platform-manager/overview' },
        },

        brand.id,
      ),
      serviceLink: resolveLink(
        {
          '2gis': { ru: 'https://platform.2gis.ru/', en: 'https://platform.2gis.ru/en/' },
          urbi: { en: 'https://platform.urbi.ae/' },
        },
        brand.id,
      ),
    },
    ON_PREMISE: {
      title: translate({ message: 'On-Premise' }),
      description: translate({
        message: 'Установка API-платформы в вашей инфраструктуре',
      }),
      mainPageIconName: 'server',
      link: resolveLink(
        {
          '2gis': { ru: '/on-premise-api-platform', en: '/en/on-premise-api-platform' },
          urbi: { en: '/on-premise-api-platform' },
        },
        brand.id,
      ),
    },
  }) as const;

export const getProManagementInfo = (brand: NavBrand) =>
  ({
    USER_MANUAL: {
      title: translate({ message: 'Руководство пользователя' }),
      description: translate(
        {
          message: 'Поможет начать работу и познакомиться с возможностями',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'book',
      link: resolveLink(
        {
          '2gis': { ru: '/pro/overview', en: '/en/pro/overview' },
          urbi: { en: '/pro/overview' },
        },
        brand.id,
      ),
    },
    ON_PREMISE: {
      title: translate({ message: 'On-Premise' }),
      description: translate(
        {
          message: 'Установка {brand} Про в вашей инфраструктуре',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'server',
      link: resolveLink(
        {
          '2gis': { ru: '/on-premise-pro', en: '/en/on-premise-pro' },
          urbi: { en: '/on-premise-pro' },
        },
        brand.id,
      ),
    },
  }) as const;

export const getCitylensManagementInfo = (brand: NavBrand) =>
  ({
    USER_MANUAL: {
      title: translate({ message: 'Руководство пользователя' }),
      description: translate(
        {
          message: 'Поможет начать работу и познакомиться с возможностями',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'book',
      link: resolveLink(
        {
          '2gis': { ru: '/citylens/overview', en: '/en/citylens/overview' },
          urbi: { en: '/citylens/overview' },
        },
        brand.id,
      ),
    },
    ON_PREMISE: {
      title: translate({ message: 'On-Premise' }),
      description: translate(
        {
          message: 'Установка {brand} Ситискан в вашей инфраструктуре',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'server',
      link: resolveLink(
        {
          '2gis': { ru: '/on-premise-citylens', en: '/en/on-premise-citylens' },
          urbi: { en: '/on-premise-citylens' },
        },
        brand.id,
      ),
    },
  }) as const;

export const getGeoflowManagementInfo = (brand: NavBrand) =>
  ({
    USER_MANUAL: {
      title: translate({ message: 'Руководство пользователя' }),
      description: translate(
        {
          message: 'Поможет начать работу и познакомиться с возможностями',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'book',
      link: resolveLink(
        {
          '2gis': { ru: '/geoflow/overview', en: '/en/geoflow/overview' },
          urbi: { en: '/geoflow/overview' },
        },
        brand.id,
      ),
    },
  }) as const;
