import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  styleeditor: [
    {
      type: 'category',
      label: 'Редактор стилей',
      items: [
        {
          type: 'doc',
          id: 'maps/styles/overview',
          label: 'Обзор',
        },
        {
          type: 'category',
          label: 'Слои',
          items: [
            {
              type: 'category',
              label: 'Типы слоёв',
              items: [
                {
                  type: 'doc',
                  id: 'maps/styles/layers/types/mapgl',
                  label: 'MapGL JS API',
                  key: 'maps-styles-layers-types-mapgl',
                },
                {
                  type: 'doc',
                  id: 'maps/styles/layers/types/msdk',
                  label: 'Мобильный SDK',
                  key: 'maps-styles-layers-types-msdk',
                },
              ],
            },
            {
              type: 'category',
              label: 'Готовые слои',
              items: [
                {
                  type: 'doc',
                  id: 'maps/styles/layers/configured/mapgl',
                  label: 'MapGL JS API',
                  key: 'maps-styles-layers-configured-mapgl',
                },
                {
                  type: 'doc',
                  id: 'maps/styles/layers/configured/msdk',
                  label: 'Мобильный SDK',
                  key: 'maps-styles-layers-configured-msdk',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'maps/styles/create',
          label: 'Создание стилей',
        },
        {
          type: 'doc',
          id: 'maps/styles/connect',
          label: 'Подключение стилей',
        },
      ],
    },
  ],
};

export default sidebars;
