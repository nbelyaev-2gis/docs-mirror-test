import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  rasterjsapi: [
    {
      type: 'category',
      label: 'RasterJS API',
      items: [
        {
          type: 'doc',
          id: 'maps/others/rasterjs/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'maps/others/rasterjs/start',
          label: 'Начало работы',
        },
        {
          type: 'category',
          label: 'Примеры',
          items: [
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/base',
              label: 'Базовое использование',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/markers',
              label: 'Маркеры',
              key: 'maps-others-rasterjs-examples-markers',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/popups',
              label: 'Попапы',
              key: 'maps-others-rasterjs-examples-popups',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/bounds',
              label: 'Границы карты',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/vector-layers',
              label: 'Векторные слои',
              key: 'maps-others-rasterjs-examples-vector-layers',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/controls',
              label: 'Элементы управления',
              key: 'maps-others-rasterjs-examples-controls',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/geojson',
              label: 'GeoJSON',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/wkt',
              label: 'WKT',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/events',
              label: 'Обработка событий',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/examples/external-modules',
              label: 'Внешние модули',
              key: 'maps-others-rasterjs-examples-external-modules',
            },
          ],
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-loading',
              label: 'Подключение API',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/basic-types',
              label: 'Базовые типы данных',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/base-classes',
              label: 'Базовые классы',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/map',
              label: 'Карта',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/markers',
              label: 'Маркеры',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/popup',
              label: 'Попапы',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-label',
              label: 'Подсказки',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/controls',
              label: 'Элементы управления',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/vector-layers',
              label: 'Векторные слои',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/raster-layers',
              label: 'Растровые слои',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/other-layers',
              label: 'Дополнительные слои',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-external-modules',
              label: 'Внешние модули',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-ruler',
              label: 'Линейка',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-metalayers',
              label: 'Слои с мета-информацией',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-traffic',
              label: 'Информация о пробках',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-entrance',
              label: 'Входы в здания',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-project-detector',
              label: 'Модуль определения проекта 2ГИС',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-ajax',
              label: 'Асинхронные запросы (AJAX)',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-wkt',
              label: 'Well-known text',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-locale',
              label: 'Локализация',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/utils',
              label: 'Вспомогательные классы',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dom-utils',
              label: 'Работа с DOM',
            },
            {
              type: 'doc',
              id: 'maps/others/rasterjs/reference/dg-migration',
              label: 'Руководство по переходу на API 2.0',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
