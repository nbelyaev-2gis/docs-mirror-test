import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import i18n from '@generated/i18n';
import { getMutatedUrlHash } from './lib/getMutatedUrlHash';
import { oldPatterns } from './model/patterns';

// Редиректы с точным совпадением
const exactRedirects = new Map<string, string>([['/ru', '/']]);

// Редиректы на основе суффиксов, работающие с любым префиксом локали
//
// Суффиксы - это часть Url после префикса локали.
// Например, для URL "/en/mapgl/overview" суффикс будет "/mapgl/overview".
//
// Эти редиректы работают следующим образом:
// 1. Определяется суффикс пути (часть после локали)
// 2. Если суффикс найден в этой Map, происходит редирект
// 3. Целевой путь автоматически получает тот же префикс локали
//
// Примеры работы:
// - "/en/mapgl/styles" → "/en/maps/styles/overview"
// - "/mapgl/styles" (без локали) → "/maps/styles/overview"
//
const suffixRedirects = new Map<string, string>([
  // On-premise - Nov 2025, удалить в конце 2026
  ['/on-premise', '/on-premise-api-platform/overview/summary'],
  ['/on-premise/dgctl', '/on-premise-api-platform/overview/2gis-cli/overview'],
  ['/on-premise/keys', '/on-premise-api-platform/core/keys'],
  ['/on-premise/releases/2gis-cli', '/on-premise-api-platform/overview/2gis-cli/releases'],
  ['/on-premise/releases/core', '/on-premise-api-platform/core/releases'],
  ['/on-premise/releases/api-platform', '/on-premise-api-platform/api-platform/releases'],
  ['/on-premise/releases/pro', '/on-premise-pro/releases'],
  ['/on-premise/releases/citylens', '/on-premise-citylens/releases'],
  ['/on-premise/releases/gisplatform', '/on-premise-gis-platform/releases'],
  ['/on-premise/releases/on-premise', '/on-premise-api-platform/previous-releases'],
  ['/on-premise/architecture/requirements', '/on-premise-api-platform/overview/summary'],
  [
    '/on-premise/architecture/c4-diagrams',
    '/on-premise-api-platform/overview/architecture/c4-diagrams',
  ],
  ['/on-premise/architecture/api-keys', '/on-premise-api-platform/overview/api-keys'],
  ['/on-premise/architecture/lifecycle', '/on-premise-api-platform/overview/lifecycle'],
  [
    '/on-premise-api-platform/architecture',
    '/on-premise-api-platform/architecture/solution-architecture',
  ],
  ['/on-premise-pro/architecture', '/on-premise-pro/architecture/solution-architecture'],
  ['/on-premise-citylens/architecture', '/on-premise-citylens/architecture/solution-architecture'],
  ['/on-premise-api-platform/install', '/on-premise-api-platform/install/requirements'],
  ['/on-premise-citylens/install', '/on-premise-citylens/install/requirements'],
  ['/on-premise-pro/install', '/on-premise-pro/install/requirements'],
  [
    '/on-premise-api-platform/overview/2gis-cli',
    '/on-premise-api-platform/overview/2gis-cli/overview',
  ],
  ['/on-premise-pro/overview/2gis-cli', '/on-premise-pro/overview/2gis-cli/overview'],
  ['/on-premise-citylens/overview/2gis-cli', '/on-premise-citylens/overview/2gis-cli/overview'],
  ['/on-premise/overview', '/on-premise-api-platform/overview/summary'],
  ['/on-premise-api-platform/overview/', '/on-premise-api-platform/overview/summary'],

  // Pro - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/pro', '/pro/overview'],
  ['/pro/dashboards/widgets', '/pro/dashboards/widgets/overview'],
  ['/pro/dashboards/dashboards', '/pro/dashboards/dashboards/create'],
  ['/pro/dashboards', '/pro/dashboards/overview'],
  ['/pro/dashboards/layers', '/pro/dashboards/layers/create'],
  ['/pro/dashboards/scenes', '/pro/dashboards/scenes/create'],
  ['/pro/data/api-upload', '/pro/data/api-upload/dynamic-upload'],
  ['/pro/data/built-in', '/pro/data/built-in/firms'],
  ['/pro/data', '/pro/data/overview'],
  ['/pro/data/manage', '/pro/data/manage/modify'],
  ['/pro/geospatial', '/pro/geospatial/ruler'],
  ['/pro/presets', '/pro/presets/overview'],
  ['/pro/styles', '/pro/styles/management'],
  ['/pro/visualization', '/pro/data/visualization/overview'],

  // Pro - Nov 2025, удалить в конце 2026
  ['/pro/dashboards/widgets/create', '/pro/dashboards/widgets/overview'],
  ['/pro/presets/business', '/pro/presets/overview'],
  ['/pro/visualization/buildings', '/pro/data/visualization/buildings'],
  ['/pro/visualization/cluster', '/pro/data/visualization/cluster'],
  ['/pro/visualization/contour', '/pro/data/visualization/contour'],
  ['/pro/visualization/grid', '/pro/data/visualization/grid'],
  ['/pro/visualization/h3', '/pro/data/visualization/h3'],
  ['/pro/visualization/heatmap', '/pro/data/visualization/heatmap'],
  ['/pro/visualization/hexbin', '/pro/data/visualization/hexbin'],
  ['/pro/visualization/line', '/pro/data/visualization/line'],
  ['/pro/visualization/overview', '/pro/data/visualization/overview'],
  ['/pro/visualization/point', '/pro/data/visualization/point'],
  ['/pro/visualization/polygon', '/pro/data/visualization/polygon'],

  // Android SDK - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/android/sdk/examples', '/android/sdk/examples/base'],
  ['/android/sdk/examples/getting_started', '/android/sdk/start'],
  ['/android/sdk', '/android/sdk/overview'],
  ['/android/sdk/releases', '/android/sdk/releases/latest'],

  // API Навигации - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/api/navigation', '/api/navigation/overview'],
  ['/api/navigation/directions', '/api/navigation/directions/overview'],
  ['/api/navigation/directions/reference', '/api/navigation/directions/reference/directions_601'],
  ['/api/navigation/distance-matrix', '/api/navigation/distance-matrix/overview'],
  [
    '/api/navigation/distance-matrix/reference',
    '/api/navigation/distance-matrix/reference/get_dist_matrix',
  ],
  ['/api/navigation/isochrone', '/api/navigation/isochrone/overview'],
  ['/api/navigation/isochrone/reference', '/api/navigation/isochrone/reference/isochrone_200'],
  ['/api/navigation/map-matching', '/api/navigation/map-matching/overview'],
  ['/api/navigation/map-matching/reference', '/api/navigation/map-matching/reference/map_matching'],
  ['/api/navigation/pairs', '/api/navigation/pairs/overview'],
  ['/api/navigation/pairs/reference', '/api/navigation/pairs/reference/get_pairs'],
  ['/api/navigation/radar', '/api/navigation/radar/overview'],
  ['/api/navigation/radar/reference', '/api/navigation/radar/reference/geolocation_v2'],
  ['/api/navigation/routing', '/api/navigation/routing/overview'],
  ['/api/navigation/routing/examples', '/api/navigation/routing/examples/overview'],
  ['/api/navigation/routing/reference', '/api/navigation/routing/reference/routing'],
  ['/api/navigation/truck-directions', '/api/navigation/truck-directions/overview'],
  [
    '/api/navigation/truck-directions/reference',
    '/api/navigation/truck-directions/reference/truck_601',
  ],
  ['/api/navigation/tsp', '/api/navigation/tsp/overview'],
  ['/api/navigation/tsp/reference', '/api/navigation/tsp/reference/create_110'],
  ['/api/navigation/route-planner', '/api/navigation/route-planner/overview'],
  [
    '/api/navigation/route-planner/reference',
    '/api/navigation/route-planner/reference/route-planner',
  ],

  // API Поиска - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/api/search', '/api/search/overview'],
  ['/api/search/catalog/reference', '/api/search/catalog/reference/3.0/dashboard/geo/items'],
  ['/api/search/categories', '/api/search/categories/overview'],
  [
    '/api/search/categories/reference',
    '/api/search/categories/reference/2.0/catalog/rubric/search',
  ],
  ['/api/search/geocoder', '/api/search/geocoder/overview'],
  ['/api/search/geocoder/reference', '/api/search/geocoder/reference/3.0/items/geocode'],
  ['/api/search/markers', '/api/search/markers/overview'],
  ['/api/search/markers/reference', '/api/search/markers/reference/3.0/markers'],
  ['/api/search/places', '/api/search/places/overview'],
  ['/api/search/places/reference', '/api/search/places/reference/3.0/items'],
  ['/api/search/regions', '/api/search/regions/overview'],
  ['/api/search/regions/reference', '/api/search/regions/reference/2.0/region/search'],
  ['/api/search/suggest', '/api/search/suggest/overview'],
  ['/api/search/suggest/reference', '/api/search/suggest/reference/3.0/suggests'],

  // CityLens - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/citylens', '/citylens/overview'],
  ['/citylens/administrator', '/citylens/administrator/overview'],
  ['/citylens/administrator/planner', '/citylens/administrator/planner/overview'],
  ['/citylens/administrator/pro', '/citylens/administrator/pro/overview'],
  ['/citylens/administrator/web', '/citylens/administrator/web/overview'],
  ['/citylens/administrator/export', '/citylens/administrator/export/overview'],
  ['/citylens/driver', '/citylens/driver/start'],

  // Flutter SDK - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/flutter/sdk/examples', '/flutter/sdk/examples/base'],
  ['/flutter/sdk/examples/getting_started', '/flutter/sdk/start'],
  ['/flutter/sdk', '/flutter/sdk/overview'],
  ['/flutter/sdk/releases', '/flutter/sdk/releases/latest'],

  // iOS SDK - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/ios/sdk/examples', '/ios/sdk/examples/base'],
  ['/ios/sdk/examples/getting_started', '/ios/sdk/start'],
  ['/ios/sdk', '/ios/sdk/overview'],
  ['/ios/sdk/releases', '/ios/sdk/releases/latest'],

  // MapGL - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/mapgl/geodata', '/mapgl/geodata/formats'],
  ['/mapgl', '/mapgl/overview/features'],
  ['/mapgl/map/configuration', '/mapgl/map/configuration/overview'],
  ['/mapgl/map', '/mapgl/map/configuration/overview'],
  ['/mapgl/map/tools', '/mapgl/map/tools/ruler'],
  ['/mapgl/map/usage', '/mapgl/map/usage/examples'],
  ['/mapgl/map-style/immersive', '/mapgl/map-style/immersive/overview'],
  ['/mapgl/map-style', '/mapgl/map-style/create'],
  ['/mapgl/map-style/examples', '/mapgl/map-style/examples/texturedpolygon'],
  ['/mapgl/objects', '/mapgl/objects/markers'],
  ['/mapgl/overview', '/mapgl/overview/features'],
  ['/mapgl/plugins/clusterer/reference', '/mapgl/plugins/clusterer/reference/class'],
  ['/mapgl/plugins/deck2gisLayer/reference', '/mapgl/plugins/deck2gisLayer/reference/class'],
  ['/mapgl/plugins/directions/reference', '/mapgl/plugins/directions/reference/class'],
  ['/mapgl/plugins/gltf/reference', '/mapgl/plugins/gltf/reference/class'],
  ['/mapgl/plugins/gltf2/reference', '/mapgl/plugins/gltf2/reference/class'],
  ['/mapgl/plugins', '/mapgl/plugins/clusterer/reference/class'],
  ['/mapgl/plugins/ruler/reference', '/mapgl/plugins/ruler/reference/class'],
  ['/mapgl/reference', '/mapgl/reference/class'],
  ['/mapgl/start', '/mapgl/start/first-steps'],

  // Карты - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/maps', '/maps/overview'],
  ['/maps/others/floorsjs', '/maps/others/floorsjs/overview'],
  ['/maps/others/rasterjs', '/maps/others/rasterjs/overview'],
  ['/maps/others/rasterjs/examples', '/maps/others/rasterjs/examples/base'],
  ['/maps/others/rasterjs/reference', '/maps/others/rasterjs/reference/dg-loading'],
  ['/maps/others/static', '/maps/others/static/overview'],
  ['/maps/others/rastertiles', '/maps/others/rastertiles/overview'],
  ['/maps/others/maptiles', '/maps/others/maptiles/overview'],
  ['/maps/styles', '/maps/styles/overview'],
  ['/maps/styles/layers/configured', '/maps/styles/layers/configured/mapgl'],
  ['/maps/styles/layers', '/maps/styles/layers/types/mapgl'],
  ['/maps/styles/layers/types', '/maps/styles/layers/types/mapgl'],

  // Менеджер платформы - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/platform-manager', '/platform-manager/overview'],
  ['/platform-manager/subscription', '/platform-manager/subscription/services'],
  ['/platform-manager/keys', '/platform-manager/subscription/keys'],
  ['/platform-manager/statistics', '/platform-manager/subscription/statistics'],

  // ГеоПоток - редиректы для родительских страниц, не удалять, если не меняется структура
  ['/geoflow', '/geoflow/overview'],
  ['/geoflow/administrator', '/geoflow/administrator/overview'],
  ['/geoflow/administrator/managing', '/geoflow/administrator/managing/users'],
  ['/geoflow/administrator/planning', '/geoflow/administrator/planning/shifts'],
  ['/geoflow/operator', '/geoflow/operator/start'],

  // ГеоПоток — редиректы после удаления инструкций, Apr 26, удалить в конце 2026
  ['/geoflow/administrator/managing/operators', '/geoflow/administrator/overview'],
  ['/geoflow/administrator/managing/groups', '/geoflow/administrator/overview'],
  ['/geoflow/administrator/managing/transport', '/geoflow/administrator/overview'],
  ['/geoflow/administrator/monitoring/dashboard', '/geoflow/administrator/monitoring'],
  ['/geoflow/administrator/monitoring/movements', '/geoflow/administrator/monitoring'],
  ['/geoflow/administrator/monitoring/reports', '/geoflow/administrator/monitoring'],
]);

const regexRedirects = [
  // Заменяем значение в ссылке для MapGL на /class если это не class|enumeration|interface|method|struct|typeAlias
  {
    pattern:
      /^(\/mapgl\/(?:.*\/)?reference)\/(?!(?:class|enumeration|interface|method|struct|typeAlias)$).*$/,
    replacement: '$1/class',
  },
  // iOS SDK - добавляем версию stable если её нет
  {
    pattern: /^(.*)\/ios\/sdk\/reference\/(?!(?:stable|[\d]+(?:\.[\d]+)*)\/)$/,
    replacement: '$1/ios/sdk/reference/stable/class',
  },
  // Android SDK - добавляем версию stable если её нет
  {
    pattern: /^(.*)\/android\/sdk\/reference\/(?!(?:stable|[\d]+(?:\.[\d]+)*)\/)$/,
    replacement: '$1/android/sdk/reference/stable/class',
  },
  // Заменяем значение в ссылке для iOS/Android SDK  на /class если это не class|enumeration|interface|method|struct|typeAlias
  {
    pattern:
      /^(.*)\/(((?:ios|android)\/sdk\/reference\/(?:stable|[\d]+(?:\.[\d]+)*(?:-[A-Za-z0-9.-]+)?)))\/(?!(?:class|enumeration|interface|method|struct|typeAlias)$).*$/,
    replacement: '$1/$2/class',
  },
  // 13. Редирект с /reference на mapgl/reference/class для всех
  {
    pattern: /^\/reference(?:\/.*)?$/,
    replacement: '/mapgl/reference/class',
  },
  // 14. Общий редирект после изменения структуры On-Premise - Nov 2025, удалить в конце 2026
  {
    pattern: /^(.*)\/on-premise\/(update|deployment|administration|intro)(?:\/.*)?$/,
    replacement: '$1/on-premise-api-platform/overview/summary',
  },
  {
    pattern: /^(.*)\/on-premise\/architecture\/services(?:\/.*)?$/,
    replacement: '$1/on-premise-api-platform/overview/summary',
  },
  {
    pattern: /^(.*)\/on-premise\/architecture\/2gis-cli(?:\/.*)?$/,
    replacement: '$1/on-premise-api-platform/overview/2gis-cli/overview',
  },
  // 14. Редиректы с корневых страниц компонентов после изменения структуры On-Premise - Apr 2026
  {
    pattern: /^(.*)\/on-premise-(api-platform|gis-platform|pro|citylens)$/,
    replacement: '$1/on-premise-$2/overview/summary',
  },
  {
    pattern: /^(.*)\/on-premise-(api-platform|gis-platform|pro|citylens)\/overview\/2gis-cli$/,
    replacement: '$1/on-premise-$2/overview/2gis-cli/overview',
  },
  // 15. Редирект с Карты > Экспорт тайлов на On-Premise > API-платформа > Рук-во пользователя > Экспорт тайлов - Jan 2026, удалить в конце 2026
  {
    pattern: /^(.*)\/maps\/mapbox(?:\/.*)?$/,
    replacement: '$1/on-premise-api-platform/api-platform/user-guide/vector-tiles',
  },
  // 16. Редирект с Public Transport API на Routing API > Обзор - Mar 2026, удалить весной 2027
  {
    pattern: /^(.*)\/api\/navigation\/public-transport(?:\/.*)?$/,
    replacement: '$1/api/navigation/routing/overview',
  },
];

// Предварительно построенные редиректы с учетом локали
const localeAwareRedirects = new Map<string, string>();

function normalizePathWithLocale(path: string, targetLocale?: string): string {
  const { defaultLocale } = i18n;

  // Если целевая локаль - локаль по умолчанию или не указана, не добавляем префикс локали
  if (!targetLocale || targetLocale === defaultLocale) {
    return path;
  }

  // Добавляем префикс локали для не-дефолтных локалей
  return `/${targetLocale}${path}`;
}

function getCurrentLocale(pathname: string): string {
  const { defaultLocale, locales } = i18n;

  for (const locale of locales) {
    if (locale !== defaultLocale && pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }

  return defaultLocale;
}

if (ExecutionEnvironment.canUseDOM) {
  const { defaultLocale, locales } = i18n;

  // Строим точные редиректы с правильной обработкой локали
  for (const [path, target] of exactRedirects) {
    for (const locale of locales) {
      const sourcePath = locale === defaultLocale ? path : `/${locale}${path}`;

      // Целевой путь должен сохранять контекст локали или использовать явную локаль цели
      let targetPath = target;

      // Если цель не начинается с локали, применяем текущий контекст локали
      const hasTargetLocale = locales.some(
        (loc) => loc !== defaultLocale && target.startsWith(`/${loc}/`),
      );
      if (!hasTargetLocale) {
        targetPath = normalizePathWithLocale(target, locale);
      }

      localeAwareRedirects.set(sourcePath, targetPath);
    }
  }

  // Строим суффиксные редиректы с правильной обработкой локали
  for (const [suffix, target] of suffixRedirects) {
    for (const locale of locales) {
      const sourcePath = locale === defaultLocale ? suffix : `/${locale}${suffix}`;

      const targetPath = normalizePathWithLocale(target, locale);

      localeAwareRedirects.set(sourcePath, targetPath);
    }
  }
}

function handleRedirect(pathname: string): string | null {
  const decodedPathname = decodeURIComponent(pathname);

  // Проверяем предварительно построенные точные редиректы
  const exactRedirect = localeAwareRedirects.get(decodedPathname);
  if (exactRedirect) {
    return exactRedirect;
  }

  // Проверяем regex-паттерны с учетом локали
  const currentLocale = getCurrentLocale(decodedPathname);

  for (const rule of regexRedirects) {
    const match = decodedPathname.match(rule.pattern);

    if (match) {
      let redirectPath = rule.replacement;
      match.forEach((group, index) => {
        if (index > 0) {
          redirectPath = redirectPath.replace(new RegExp(`\\$${index}`, 'g'), group || '');
        }
      });

      // Если редирект еще не включает локаль, применяем текущий контекст локали
      const { locales, defaultLocale } = i18n;
      const hasRedirectLocale = locales.some(
        (loc) => loc !== defaultLocale && redirectPath.startsWith(`/${loc}/`),
      );

      if (!hasRedirectLocale) {
        redirectPath = normalizePathWithLocale(redirectPath, currentLocale);
      }

      return redirectPath;
    }
  }

  return null;
}

function applyRedirectWithHash(redirectUrl: string): void {
  let finalUrl = redirectUrl;

  // Если есть хеш, мутируем его согласно старым паттернам
  if (window.location.hash) {
    const mutatedHash = getMutatedUrlHash(window.location.hash, { patterns: oldPatterns });
    finalUrl += '#' + mutatedHash;
  }

  window.history.pushState(null, '', finalUrl);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

if (ExecutionEnvironment.canUseDOM) {
  // Обрабатываем начальную загрузку
  const redirectUrl = handleRedirect(window.location.pathname);

  if (redirectUrl) {
    let finalUrl = redirectUrl;

    // Обрабатываем хеш для начальной загрузки
    if (window.location.hash) {
      const mutatedHash = getMutatedUrlHash(window.location.hash, { patterns: oldPatterns });
      finalUrl += '#' + mutatedHash;
    }

    window.location.replace(finalUrl);
  }

  // Перехватываем все клики по ссылкам
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (link?.classList.contains('menu__link')) return;

      if (link && link.href) {
        const url = new URL(link.href);

        if (url.origin === window.location.origin) {
          const redirectUrl = handleRedirect(url.pathname);

          if (redirectUrl) {
            event.preventDefault();
            event.stopPropagation();

            // Сохраняем оригинальный хеш для мутации
            const originalHash = url.hash;
            window.location.hash = originalHash;

            applyRedirectWithHash(redirectUrl);
          }
        }
      }
    },
    true,
  );
}
