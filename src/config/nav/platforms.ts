import {
  getApiPlatformManagementInfo,
  getCitylensManagementInfo,
  getGeoflowManagementInfo,
  getProManagementInfo,
} from './manage';
import { getApiPlatformServicesInfo } from './api-platform';
import { translate } from '@docusaurus/Translate';
import type { NavBrand, PlatformsInfo } from './types';
import { resolveLink } from './utils';

// @TODO: поработать с неймингом при заходе в мультитенантность
export const getPlatformsInfo = (brand: NavBrand) => {
  const API_PLATFORM_MANAGEMENT_INFO = getApiPlatformManagementInfo(brand);
  const PRO_MANAGEMENT_INFO = getProManagementInfo(brand);
  const CITYLENS_MANAGEMENT_INFO = getCitylensManagementInfo(brand);
  const GEOFLOW_MANAGEMENT_INFO = getGeoflowManagementInfo(brand);
  const API_PLATFORM_SERVICES_INFO = getApiPlatformServicesInfo(brand);

  const platformsInfo = {
    API_PLATFORM: {
      title: translate({ message: 'API-платформа' }),
      description: translate(
        {
          message:
            'Единая точка доступа ко всем сервисам {brand} — картам, навигации, поиску и мобильным SDK. Создавайте собственные продукты на основе данных и технологий {brand}.',
        },
        { brand: brand.label },
      ),
      logoPath: '/img/docs-nav/platforms/api-platform.png',
      logoAlt: translate({
        message: 'Логотип API-платформы',
      }),
      iconName: 'apiPlatformLogo',
      controlButtons: [
        {
          label: translate({
            message: 'Подробнее',
          }),
          link: resolveLink(
            {
              urbi: { en: '/api-platform' },
              '2gis': { ru: '/api-platform', en: '/en/api-platform' },
            },
            brand.id,
          ),
          type: 'primary',
          hideInNav: true,
        },
        {
          label: translate({
            message: 'В Менеджер Платформы',
          }),
          link: resolveLink(
            {
              urbi: { en: 'https://platform.urbi.ae/' },
              '2gis': { ru: 'https://platform.2gis.ru/', en: 'https://platform.2gis.ru/en/' },
            },
            brand.id,
          ),
          type: 'outline',
          hideInNav: false,
        },
      ],
      mainSectionInfoBlocks: [
        {
          title: translate({
            message: 'Сервисы',
          }),
          items: [
            API_PLATFORM_SERVICES_INFO.MAPS,
            API_PLATFORM_SERVICES_INFO.NAVIGATION,
            API_PLATFORM_SERVICES_INFO.SEARCH,
            API_PLATFORM_SERVICES_INFO.MOBILE_SDK,
          ],
        },
        {
          title: translate({
            message: 'Управление',
          }),
          items: [
            API_PLATFORM_MANAGEMENT_INFO.PLATFORM_MANAGER,
            API_PLATFORM_MANAGEMENT_INFO.ON_PREMISE,
          ],
        },
      ],
    },
    PRO: {
      title: translate(
        {
          message: '{brand} Про',
        },
        { brand: brand.label },
      ),
      description: translate({
        message:
          'Удобный и мощный инструмент аналитики для принятия бизнес‑решений. Анализируйте большие массивы данных и легко визуализируйте результаты прямо на карте.',
      }),
      logoPath: '/img/docs-nav/platforms/pro.png',
      logoAlt: translate(
        {
          message: 'Логотип {brand} Про',
        },
        { brand: brand.label },
      ),
      iconName: 'proLogo',
      controlButtons: [
        {
          label: translate({
            message: 'Подробнее',
          }),
          link: resolveLink(
            {
              urbi: { en: '/pro/overview' },
              '2gis': { ru: '/pro/overview', en: '/en/pro/overview' },
            },
            brand.id,
          ),
          type: 'primary',
          hideInNav: true,
        },
        {
          label: translate(
            {
              message: 'В {brand} Про',
            },
            { brand: brand.label },
          ),
          link: resolveLink(
            {
              urbi: { en: 'https://pro.urbi.ae/' },
              '2gis': { ru: 'https://pro.2gis.ru/', en: 'https://pro.urbi.ae/' },
            },
            brand.id,
          ),
          type: 'outline',
          hideInNav: false,
        },
      ],
      mainSectionInfoBlocks: [
        {
          items: [PRO_MANAGEMENT_INFO.USER_MANUAL, PRO_MANAGEMENT_INFO.ON_PREMISE],
        },
      ],
    },
    CITY_LENS: {
      title: translate(
        {
          message: '{brand} Ситискан',
        },
        { brand: brand.label },
      ),
      description: translate(
        {
          message:
            'Эффективное решение для фиксации и обработки данных реального мира. С помощью {brand} Ситискан вы можете оцифровать городскую среду для последующего анализа.',
        },
        { brand: brand.label },
      ),
      logoPath: '/img/docs-nav/platforms/citylens.png',
      logoAlt: translate(
        {
          message: 'Логотип {brand} Ситискан',
        },
        { brand: brand.label },
      ),
      iconName: 'cityLensLogo',
      controlButtons: [
        {
          label: translate({
            message: 'Подробнее',
          }),
          link: resolveLink(
            {
              urbi: { en: '/citylens/overview' },
              '2gis': { ru: '/citylens/overview', en: '/en/citylens/overview' },
            },
            brand.id,
          ),
          type: 'primary',
          hideInNav: true,
        },
      ],
      mainSectionInfoBlocks: [
        {
          items: [CITYLENS_MANAGEMENT_INFO.USER_MANUAL, CITYLENS_MANAGEMENT_INFO.ON_PREMISE],
        },
      ],
    },
    GEO_FLOW: {
      title: translate(
        {
          message: '2ГИС ГеоПоток',
        },
        { brand: brand.label },
      ),
      description: translate({
        message:
          'Решение для мониторинга работ мобильных сотрудников и транспорта в режиме реального времени',
      }),
      logoPath: '/img/docs-nav/platforms/geoflow.png',
      logoAlt: translate(
        {
          message: 'Логотип 2ГИС ГеоПоток',
        },
        { brand: brand.label },
      ),
      iconName: 'geoFlowLogo',
      controlButtons: [
        {
          label: translate({
            message: 'Подробнее',
          }),
          link: resolveLink(
            {
              urbi: { en: '/geoflow/overview' },
              '2gis': { ru: '/geoflow/overview', en: '/en/geoflow/overview' },
            },
            brand.id,
          ),
          type: 'primary',
          hideInNav: true,
        },
      ],
      mainSectionInfoBlocks: [
        {
          items: [GEOFLOW_MANAGEMENT_INFO.USER_MANUAL],
        },
      ],
      // указываем ссылку для элементов без дропдауна
      href: resolveLink(
        {
          urbi: { en: '/geoflow/overview' },
          '2gis': { ru: '/geoflow/overview', en: '/en/geoflow/overview' },
        },
        brand.id,
      ),
    },
    // @TODO blog скрываем ссылку на блог до готовности статей
    // BLOG: {
    //   title: translate({ message: 'Блог' }),
    //   href: resolveLink(
    //     {
    //       urbi: { en: '/blog' },
    //       '2gis': { ru: '/blog', en: '/en/blog' },
    //     },
    //     brand.id,
    //   ),
    // },
  } as const satisfies PlatformsInfo;

  return platformsInfo;
};
