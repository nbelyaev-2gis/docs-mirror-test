import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  isochroneapi: [
    {
      type: 'category',
      label: 'Isochrone API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/isochrone/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/navigation/isochrone/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/isochrone/reference/isochrone_200',
              label: '/isochrone/2.0.0',
            },
            {
              type: 'doc',
              id: 'api/navigation/isochrone/reference/isochrone_100',
              label: '/isochrone/1.0.0 (deprecated)',
            },
            {
              type: 'doc',
              id: 'api/navigation/isochrone/reference/get_hull',
              label: '/get_hull (deprecated)',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/isochrone/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
