import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  pro: [
    {
      type: 'category',
      label: '2ГИС Про',
      items: [
        {
          type: 'doc',
          id: 'pro/overview',
          label: 'Обзор',
          key: 'pro-overview',
        },
        {
          type: 'doc',
          id: 'pro/start',
          label: 'Быстрый старт',
        },
        {
          type: 'category',
          label: 'Данные',
          items: [
            {
              type: 'doc',
              id: 'pro/data/overview',
              label: 'Обзор',
              key: 'pro-data-overview',
            },
            {
              type: 'category',
              label: 'Системные данные',
              items: [
                {
                  type: 'doc',
                  id: 'pro/data/built-in/cars-detailed',
                  label: 'Автомобильный трафик (детальный)',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/cars',
                  label: 'Автомобильный трафик (обобщённый)',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/audience',
                  label: 'Активность аудитории',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/welfare',
                  label: 'Благосостояние населения',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/urban',
                  label: 'Городская среда',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/dynamics',
                  label: 'Динамика организаций',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/residential',
                  label: 'Жилая недвижимость',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/buildings',
                  label: 'Здания',
                  key: 'pro-data-built-in-buildings',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/demand',
                  label: 'Карта спроса',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/commercial',
                  label: 'Коммерческая недвижимость',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/population',
                  label: 'Население',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/stops',
                  label: 'Остановки транспорта',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/parkings',
                  label: 'Парковки',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/pedestrians',
                  label: 'Пешеходный трафик',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/sex-age-composition',
                  label: 'Половозрастной состав населения',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/attractiveness',
                  label: 'Привлекательность локаций',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/terminals',
                  label: 'Терминалы и банкоматы',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/territorial',
                  label: 'Территориальное деление',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/tourists',
                  label: 'Туристический потенциал',
                },
                {
                  type: 'doc',
                  id: 'pro/data/built-in/firms',
                  label: 'Фирмы',
                },
              ],
            },
            {
              type: 'category',
              label: 'Визуализация данных',
              items: [
                {
                  type: 'doc',
                  id: 'pro/data/visualization/overview',
                  label: 'Обзор',
                  key: 'pro-data-visualization-overview',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/point',
                  label: 'Точка',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/grid',
                  label: 'Сетка',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/hexbin',
                  label: 'Соты',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/heatmap',
                  label: 'Тепловая карта',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/buildings',
                  label: 'Здания',
                  key: 'pro-data-visualization-buildings',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/contour',
                  label: 'Контур',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/cluster',
                  label: 'Кластер',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/h3',
                  label: 'H3',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/line',
                  label: 'Линия',
                },
                {
                  type: 'doc',
                  id: 'pro/data/visualization/polygon',
                  label: 'Полигон',
                },
              ],
            },
            {
              type: 'doc',
              id: 'pro/data/files-upload',
              label: 'Загрузка файлов с данными',
            },
            {
              type: 'category',
              label: 'Загрузка данных по API',
              items: [
                {
                  type: 'doc',
                  id: 'pro/data/api-upload/dynamic-upload',
                  label: 'Загрузка данных по API',
                },
                {
                  type: 'doc',
                  id: 'pro/data/api-upload/api/reference',
                  label: 'Справочник API',
                },
              ],
            },
            {
              type: 'category',
              label: 'Работа с данными',
              items: [
                {
                  type: 'doc',
                  id: 'pro/data/manage/modify',
                  label: 'Изменение выборки данных',
                },
                {
                  type: 'doc',
                  id: 'pro/data/manage/filtering',
                  label: 'Фильтрация данных на дашборде',
                },
                {
                  type: 'doc',
                  id: 'pro/data/manage/datasets',
                  label: 'Операции с наборами данных',
                },
                {
                  type: 'doc',
                  id: 'pro/data/manage/groups',
                  label: 'Операции с группами наборов данных',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Дашборды',
          items: [
            {
              type: 'doc',
              id: 'pro/dashboards/overview',
              label: 'Обзор',
              key: 'pro-dashboards-overview',
            },
            {
              type: 'category',
              label: 'Управление слоями',
              items: [
                {
                  type: 'doc',
                  id: 'pro/dashboards/layers/create',
                  label: 'Создание слоя',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/layers/manage',
                  label: 'Операции со слоями',
                },
              ],
            },
            {
              type: 'category',
              label: 'Управление дашбордами',
              items: [
                {
                  type: 'doc',
                  id: 'pro/dashboards/dashboards/create',
                  label: 'Создание дашборда',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/dashboards/manage',
                  label: 'Операции с дашбордами',
                },
              ],
            },
            {
              type: 'category',
              label: 'Управление сценами',
              items: [
                {
                  type: 'doc',
                  id: 'pro/dashboards/scenes/create',
                  label: 'Создание сцены',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/scenes/manage',
                  label: 'Операции со сценами',
                },
              ],
            },
            {
              type: 'category',
              label: 'Управление виджетами',
              items: [
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/overview',
                  label: 'Обзор',
                  key: 'pro-widgets-overview',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/bar-chart',
                  label: 'Линейчатая диаграмма',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/column-chart',
                  label: 'Столбчатая диаграмма',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/histogram',
                  label: 'Гистограмма',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/line-graph',
                  label: 'Линейный график',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/pie-chart',
                  label: 'Круговая диаграмма',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/area-chart',
                  label: 'График с областями',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/custom-widget',
                  label: 'Произвольный виджет',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/comparison',
                  label: 'Сравнение',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/statistics',
                  label: 'Статистика',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/text',
                  label: 'Текстовый виджет',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/counter',
                  label: 'Индикатор',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/legend',
                  label: 'Легенда',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/timeline',
                  label: 'Временная шкала',
                },
                {
                  type: 'doc',
                  id: 'pro/dashboards/widgets/manage',
                  label: 'Операции с виджетами',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Геопространственный анализ',
          items: [
            {
              type: 'doc',
              id: 'pro/geospatial/ruler',
              label: 'Линейка',
            },
            {
              type: 'doc',
              id: 'pro/geospatial/proximity',
              label: 'Зоны доступности',
            },
            {
              type: 'doc',
              id: 'pro/geospatial/aggregation',
              label: 'Агрегация данных',
            },
          ],
        },
        {
          type: 'category',
          label: 'Сценарии аналитики',
          items: [
            {
              type: 'doc',
              id: 'pro/presets/overview',
              label: 'Обзор',
              key: 'pro-presets-overview',
            },
            {
              type: 'doc',
              id: 'pro/presets/insights',
              label: 'Аналитика локаций',
            },
          ],
        },
        {
          type: 'category',
          label: 'Стиль карты',
          items: [
            {
              type: 'doc',
              id: 'pro/styles/management',
              label: 'Управление стилем карты',
            },
            {
              type: 'doc',
              id: 'pro/styles/external',
              label: 'Подключение внешних карт',
            },
          ],
        },
        {
          type: 'doc',
          id: 'pro/assistant',
          label: 'Умный ассистент',
        },
        {
          type: 'doc',
          id: 'pro/prices',
          label: 'Тарифы',
        },
        {
          type: 'doc',
          id: 'pro/faq',
          label: 'FAQ',
        },
        {
          type: 'doc',
          id: 'pro/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
