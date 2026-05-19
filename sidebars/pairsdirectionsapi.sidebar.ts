import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  pairsdirectionsapi: [
    {
      type: 'category',
      label: 'Pairs Directions API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/pairs/overview',
          label: 'Обзор',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/pairs/reference/get_pairs',
              label: '/get_pairs/1.0/{routing_type} (limited)',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/pairs/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
