import { translate } from '@docusaurus/Translate';
import {
  ApiPlatformServiceInfo,
  ApiPlatformServiceKey,
  type ApiPlatformServiceCardItem,
  type NavBrand,
} from './types';
import { resolveLink, makeOverlayImage } from './utils';

// @TODO: при работе над мультитенантностью избавиться от хардкода брендов, разнести данные и логику
const docsLink = (path: string, brandId: NavBrand['id']): string =>
  resolveLink(
    {
      '2gis': { ru: path, en: `/en${path}` },
      urbi: { en: path },
    },
    brandId,
  );

export const TAB_QUERY_PARAM = 'tab';

const apiPlatformTabLink = (tab: ApiPlatformServiceKey, brandId: NavBrand['id']): string => {
  const query = `?${TAB_QUERY_PARAM}=${tab.toLowerCase()}`;
  return resolveLink(
    {
      '2gis': { ru: `/api-platform${query}`, en: `/en/api-platform${query}` },
      urbi: { en: `/api-platform${query}` },
    },
    brandId,
  );
};

export const getApiPlatformServiceApis = (
  brand: NavBrand,
): Record<ApiPlatformServiceKey, { title?: string; items: ApiPlatformServiceCardItem[] }[]> => ({
  [ApiPlatformServiceKey.MAPS]: [
    {
      title: translate({ message: 'API карт' }),
      items: [
        {
          title: translate({ message: 'Map Tiles API' }),
          link: docsLink('/maps/others/maptiles/overview', brand.id),
          description: translate(
            { message: 'Доступ к векторным тайлам для карт {brand}' },
            { brand: brand.label },
          ),
        },
        {
          title: translate({ message: 'Raster Tiles API' }),
          link: docsLink('/maps/others/rastertiles/overview', brand.id),
          description: translate(
            { message: 'Доступ к растровым тайлам для карт {brand}' },
            { brand: brand.label },
          ),
        },
        {
          title: translate({ message: 'Static API' }),
          link: docsLink('/maps/others/static/overview', brand.id),
          description: translate(
            { message: 'Статические карты {brand} в вашем веб-приложении или на сайте' },
            { brand: brand.label },
          ),
        },
      ],
    },
    {
      title: translate({ message: 'Библиотеки' }),
      items: [
        {
          title: translate({ message: 'MapGL JS API' }),
          link: docsLink('/mapgl/overview/features', brand.id),
          description: translate(
            {
              message:
                'Интерактивные трёхмерные карты {brand} в вашем веб‑приложении или на сайте с использованием векторных тайлов',
            },
            { brand: brand.label },
          ),
        },
        {
          title: translate({ message: 'RasterJS API' }),
          link: docsLink('/maps/others/rasterjs/overview', brand.id),
          description: translate(
            {
              message:
                'Двумерные карты {brand} в вашем мобильном приложении или на сайте с использованием растровых тайлов',
            },
            { brand: brand.label },
          ),
        },
      ],
    },
    {
      title: translate({ message: 'Инструменты' }),
      items: [
        {
          title: translate({ message: 'Редактор стилей' }),
          link: docsLink('/maps/styles/overview', brand.id),
          description: translate(
            { message: 'Настройте карты {brand} под фирменный стиль вашего приложения' },
            { brand: brand.label },
          ),
        },
        {
          title: translate({ message: 'FloorsJS API' }),
          link: docsLink('/maps/others/floorsjs/overview', brand.id),
          description: translate({ message: 'Виджет с планом этажей зданий на вашем сайте' }),
        },
      ],
    },
  ],
  [ApiPlatformServiceKey.NAVIGATION]: [
    {
      items: [
        {
          title: translate({ message: 'Routing API' }),
          link: docsLink('/api/navigation/routing/overview', brand.id),
          description: translate({
            message: 'Прокладывайте маршрут на карте для разного транспорта',
          }),
          tag: 'new',
        },
        {
          title: translate({ message: 'Distance Matrix API' }),
          link: docsLink('/api/navigation/distance-matrix/overview', brand.id),
          description: translate({
            message: 'Получите информацию о расстоянии и времени в пути между точками на карте',
          }),
        },
        {
          title: translate({ message: 'TSP API' }),
          link: docsLink('/api/navigation/tsp/overview', brand.id),
          description: translate({
            message:
              'Постройте кратчайший по времени или расстоянию маршрут обхода указанных точек',
          }),
        },
        {
          title: translate({ message: 'Isochrone API' }),
          link: docsLink('/api/navigation/isochrone/overview', brand.id),
          description: translate({
            message:
              'Постройте на карте область, которая достижима от начальной точки за указанное время',
          }),
        },
        {
          title: translate({ message: 'Map Matching API' }),
          link: docsLink('/api/navigation/map-matching/overview', brand.id),
          description: translate({
            message:
              'Постройте маршрут для автомобиля из набора точек, записанных транспортным средством',
          }),
        },
        {
          title: translate({ message: 'Route Planner API' }),
          link: docsLink('/api/navigation/route-planner/overview', brand.id),
          description: translate({ message: 'Планируйте оптимальный объезд территории' }),
          tag: 'beta',
        },
        {
          title: translate({ message: 'Radar API' }),
          link: docsLink('/api/navigation/radar/overview', brand.id),
          description: translate({
            message: 'Получите геопозицию устройства в условиях слабого сигнала GPS',
          }),
        },
        {
          title: translate({ message: 'Directions API' }),
          link: docsLink('/api/navigation/directions/overview', brand.id),
          description: translate({
            message:
              'Прокладывайте маршрут на автомобиле, пешком, велосипеде или грузовике с учётом пробок',
          }),
          tag: 'deprecated',
        },
        {
          title: translate({ message: 'Pairs Directions API' }),
          link: docsLink('/api/navigation/pairs/overview', brand.id),
          description: translate({ message: 'Прокладывайте несколько маршрутов за раз' }),
          tag: 'deprecated',
        },
        {
          title: translate({ message: 'Truck Directions API' }),
          link: docsLink('/api/navigation/truck-directions/overview', brand.id),
          description: translate({
            message: 'Прокладывайте маршрут на карте для грузового транспорта',
          }),
          tag: 'deprecated',
        },
      ],
    },
  ],
  [ApiPlatformServiceKey.SEARCH]: [
    {
      items: [
        {
          title: translate({ message: 'Places API' }),
          link: docsLink('/api/search/places/overview', brand.id),
          description: translate({ message: 'Поиск организаций, зданий и мест' }),
        },
        {
          title: translate({ message: 'Geocoder API' }),
          link: docsLink('/api/search/geocoder/overview', brand.id),
          description: translate({
            message: 'Получите информацию об объекте на карте по адресу или координатам',
          }),
        },
        {
          title: translate({ message: 'Suggest API' }),
          link: docsLink('/api/search/suggest/overview', brand.id),
          description: translate({ message: 'Подсказки для поиска объектов на карте' }),
        },
        {
          title: translate({ message: 'Categories API' }),
          link: docsLink('/api/search/categories/overview', brand.id),
          description: translate({
            message: 'Информация о группах, объединяющих компании по сферам деятельности',
          }),
        },
        {
          title: translate({ message: 'Regions API' }),
          link: docsLink('/api/search/regions/overview', brand.id),
          description: translate({
            message: 'Регион, в котором выполняется поиск организаций, зданий и мест',
          }),
        },
        {
          title: translate({ message: 'Markers API' }),
          link: docsLink('/api/search/markers/overview', brand.id),
          description: translate({ message: 'Маркеры объектов на карте' }),
        },
      ],
    },
  ],
  [ApiPlatformServiceKey.MOBILE_SDK]: [
    {
      items: [
        {
          title: translate({ message: 'iOS SDK' }),
          link: docsLink('/ios/sdk/overview', brand.id),
          description: translate(
            { message: 'Карты и навигация {brand} в вашем iOS‑приложении' },
            { brand: brand.label },
          ),
        },
        {
          title: translate({ message: 'Android SDK' }),
          link: docsLink('/android/sdk/overview', brand.id),
          description: translate(
            { message: 'Карты и навигация {brand} в вашем Android‑приложении' },
            { brand: brand.label },
          ),
        },
        {
          title: translate({ message: 'Flutter SDK' }),
          link: docsLink('/flutter/sdk/overview', brand.id),
          description: translate(
            { message: 'Карты и навигация {brand} в вашем Flutter‑приложении' },
            { brand: brand.label },
          ),
        },
      ],
    },
  ],
});

export const getApiPlatformServicesInfo = (brand: NavBrand) =>
  ({
    [ApiPlatformServiceKey.MAPS]: {
      title: translate({ message: 'Карты' }),
      link: apiPlatformTabLink(ApiPlatformServiceKey.MAPS, brand.id),
      description: translate(
        { message: 'Интерактивные карты {brand} в вашем веб‑приложении или сайте' },
        { brand: brand.label },
      ),
      mainPageIconName: 'map',
      overlayImage: null,
    },
    [ApiPlatformServiceKey.NAVIGATION]: {
      title: translate({ message: 'Навигация' }),
      link: apiPlatformTabLink(ApiPlatformServiceKey.NAVIGATION, brand.id),
      description: translate(
        {
          message:
            'API {brand} для построения маршрутов и получения информации о длине маршрута и времени в пути',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'navigation',
      overlayImage: makeOverlayImage('/img/docs-nav/services/service-navigation-view'),
    },
    [ApiPlatformServiceKey.SEARCH]: {
      title: translate({ message: 'Поиск' }),
      link: apiPlatformTabLink(ApiPlatformServiceKey.SEARCH, brand.id),
      description: translate(
        {
          message:
            'API {brand} для решения задач, связанных с поиском объектов на карте или сбором информации об объектах',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'search',
      overlayImage: makeOverlayImage('/img/docs-nav/services/service-search-view'),
    },
    [ApiPlatformServiceKey.MOBILE_SDK]: {
      title: translate({ message: 'Мобильные SDK' }),
      link: apiPlatformTabLink(ApiPlatformServiceKey.MOBILE_SDK, brand.id),
      description: translate(
        {
          message:
            'Карты и навигация {brand} в ваших мобильных приложениях для iOS, Android и Flutter',
        },
        { brand: brand.label },
      ),
      mainPageIconName: 'msdk',
      overlayImage: makeOverlayImage('/img/docs-nav/services/service-mobile-sdk-view'),
    },
  }) as const satisfies Record<ApiPlatformServiceKey, ApiPlatformServiceInfo>;

export const getApiPlatformHeroInfo = (brand: NavBrand) => ({
  title: translate({ message: 'API-платформа' }),
  description: translate(
    {
      message:
        'Единая точка доступа ко всем сервисам {brand} — картам, навигации, поиску и мобильным SDK. Создавайте собственные продукты на основе данных и технологий {brand}.',
    },
    { brand: brand.label },
  ),
  image: '/img/docs-nav/platforms/api-platform.png',
  button: {
    label: translate({ message: 'В Менеджер Платформы' }),
    variant: 'outline',
    link: resolveLink(
      {
        '2gis': { ru: 'https://platform.2gis.ru/', en: 'https://platform.2gis.ru/en/' },
        urbi: { en: 'https://platform.urbi.ae/' },
      },
      brand.id,
    ),
  },
});
