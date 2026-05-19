import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  rastertilesapi: [
    {
      type: 'category',
      label: 'Raster Tiles API',
      items: [
        {
          type: 'doc',
          id: 'maps/others/rastertiles/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'maps/others/rastertiles/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
