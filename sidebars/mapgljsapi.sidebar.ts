import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { createSDKSidebar } from './lib/createSDKSidebar';

const sidebars: SidebarsConfig = {
  mapgljsapi: [
    {
      type: 'category',
      label: 'MapGL JS API',
      items: [
        {
          type: 'category',
          label: 'Обзор',
          items: [
            {
              type: 'doc',
              id: 'mapgl/overview/features',
              label: 'Ключевые возможности',
            },
            {
              type: 'doc',
              id: 'mapgl/overview/usage',
              label: 'Сценарии использования',
            },
            {
              type: 'doc',
              id: 'mapgl/overview/browser-support',
              label: 'Поддержка браузеров',
            },
            {
              type: 'doc',
              id: 'mapgl/overview/tariffs',
              label: 'Тарифы и размещение',
            },
          ],
        },
        {
          type: 'category',
          label: 'Начало работы',
          items: [
            {
              type: 'doc',
              id: 'mapgl/start/first-steps',
              label: 'Начало работы',
            },
            {
              type: 'doc',
              id: 'mapgl/start/react',
              label: 'Работа с React',
            },
          ],
        },
        {
          type: 'category',
          label: 'Карта',
          items: [
            {
              type: 'category',
              label: 'Настройки карты',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/map/configuration/overview',
                  label: 'Обзор',
                  key: 'mapgl-map-configuration-overview',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/configuration/controls',
                  label: 'Элементы управления',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/configuration/fitbounds',
                  label: 'Масштабирование по границам',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/configuration/scroll',
                  label: 'Скролл страницы с картой',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/configuration/geolocation',
                  label: 'Геолокация',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/configuration/floors',
                  label: 'Планы этажей',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/configuration/loopedmap',
                  label: 'Зацикленная карта',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/configuration/graphics-presets',
                  label: 'Графические режимы',
                },
              ],
            },
            {
              type: 'category',
              label: 'Дополнительные инструменты',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/map/tools/ruler',
                  label: 'Линейка',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/tools/directions',
                  label: 'Построение маршрутов',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map/tools/drawing',
                  label: 'Рисование фигур',
                },
              ],
            },
            {
              type: 'category',
              label: 'Примеры использования API',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/map/usage/examples',
                  label: 'Примеры',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Динамические объекты',
          items: [
            {
              type: 'doc',
              id: 'mapgl/objects/markers',
              label: 'Маркеры',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/markers-animation',
              label: 'Анимация маркеров',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/clustering',
              label: 'Кластеризация маркеров',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/icons',
              label: 'Иконки',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/geometries',
              label: 'Геометрические фигуры',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/arrows',
              label: 'Стрелки',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/labels',
              label: 'Текстовые метки',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/popups',
              label: 'Попапы',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/tooltips',
              label: 'Всплывающие подсказки',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/rasterobject',
              label: 'Растровый объект',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/gltf2-plugin',
              label: 'glTF-плагин v2',
            },
            {
              type: 'doc',
              id: 'mapgl/objects/gltf-plugin',
              label: 'glTF-плагин v1 (deprecated)',
            },
            {
              type: 'category',
              label: 'Работа с объектами',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/objects/selection',
                  label: 'Выделение объектов',
                },
                {
                  type: 'doc',
                  id: 'mapgl/objects/coloring',
                  label: 'Раскрашивание объектов',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Источники данных',
          items: [
            {
              type: 'doc',
              id: 'mapgl/geodata/formats',
              label: 'Форматы геоданных',
            },
            {
              type: 'doc',
              id: 'mapgl/geodata/geojson',
              label: 'GeoJSON',
            },
            {
              type: 'doc',
              id: 'mapgl/geodata/geojson-viewport',
              label: 'Viewport GeoJSON на примере WFS',
            },
            {
              type: 'doc',
              id: 'mapgl/geodata/raster',
              label: 'Растровые WMS/WMTS-источники',
            },
          ],
        },
        {
          type: 'category',
          label: 'Стили',
          items: [
            {
              type: 'doc',
              id: 'mapgl/map-style/create',
              label: 'Создание стиля карты',
            },
            {
              type: 'doc',
              id: 'mapgl/map-style/modify',
              label: 'Изменение стиля «на лету»',
            },
            {
              type: 'doc',
              id: 'mapgl/map-style/global-style-variables',
              label: 'Глобальные переменные стиля',
            },
            {
              type: 'doc',
              id: 'mapgl/map-style/stylezoom',
              label: 'Стилевой уровень масштабирования',
            },
            {
              type: 'category',
              label: 'Примеры стилизации',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/map-style/examples/texturedpolygon',
                  label: 'Заливка полигона текстурой',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/examples/stretchableimage',
                  label: 'Тянущаяся подложка подписи',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/examples/heatmap',
                  label: 'Тепловая карта',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/examples/linecaption',
                  label: 'Подпись линии',
                },
              ],
            },
            {
              type: 'category',
              label: 'Иммерсивные возможности',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/overview',
                  label: 'Обзор',
                  key: 'mapgl-map-style-immersive-overview',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/models',
                  label: '3D-модели',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/trees',
                  label: 'Деревья на карте',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/road-infrastructure',
                  label: 'Иммерсивные дороги',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/camerafade',
                  label: 'Пересечение с камерой',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/hillshade',
                  label: 'Хилшейд',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/terrain',
                  label: '3D-рельеф',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/lighting',
                  label: 'Освещение',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/sky',
                  label: 'Небо и туман',
                },
                {
                  type: 'doc',
                  id: 'mapgl/map-style/immersive/globe',
                  label: 'Глобус',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'mapgl/turfjs',
          label: 'Работа с геометриями',
        },
        ...createSDKSidebar('map'),
        {
          type: 'category',
          label: 'Плагины',
          items: [
            {
              type: 'category',
              label: 'Clusterer plugin',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/plugins/clusterer/overview',
                  label: 'Обзор',
                  key: 'mapgl-plugins-clusterer-overview',
                },
                ...createSDKSidebar('clusterer'),
              ],
            },
            {
              type: 'category',
              label: 'Directions plugin',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/plugins/directions/overview',
                  label: 'Обзор',
                  key: 'mapgl-plugins-directions-overview',
                },
                ...createSDKSidebar('directions'),
              ],
            },
            {
              type: 'category',
              label: 'DeckGL plugin',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/plugins/deck2gisLayer/overview',
                  label: 'Обзор',
                  key: 'mapgl-plugins-deck2gislayer-overview',
                },
                {
                  type: 'doc',
                  id: 'mapgl/plugins/deck2gisLayer/deck-layers',
                  label: 'Работа с несколькими слоями',
                  key: 'mapgl-plugins-deck2gislayer-deck-layers',
                },
                {
                  type: 'doc',
                  id: 'mapgl/plugins/deck2gisLayer/deck-interactivity',
                  label: 'Получение данных слоя',
                  key: 'mapgl-plugins-deck2gislayer-deck-interactivity',
                },
                ...createSDKSidebar('deck2gisLayer'),
              ],
            },
            {
              type: 'category',
              label: 'glTF plugin (deprecated)',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/plugins/gltf/overview',
                  label: 'Обзор',
                  key: 'mapgl-plugins-gltf-overview',
                },
                ...createSDKSidebar('gltf'),
              ],
            },
            {
              type: 'category',
              label: 'glTF plugin версии 2',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/plugins/gltf2/overview',
                  label: 'Обзор',
                  key: 'mapgl-plugins-gltf2-overview',
                },
                ...createSDKSidebar('gltf2'),
              ],
            },
            {
              type: 'category',
              label: 'Ruler plugin',
              items: [
                {
                  type: 'doc',
                  id: 'mapgl/plugins/ruler/overview',
                  label: 'Обзор',
                  key: 'mapgl-plugins-ruler-overview',
                },
                ...createSDKSidebar('ruler'),
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'mapgl/styles-specification',
          label: 'Спецификация стиля',
        },
        {
          type: 'doc',
          id: 'mapgl/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
