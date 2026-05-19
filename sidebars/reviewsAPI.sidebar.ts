import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  reviewsAPI: [
    {
      type: 'category',
      label: 'Reviews API',
      items: [
        {
          type: 'doc',
          id: 'api/ugc/reviews/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/ugc/reviews/examples',
          label: 'Примеры',
        },
      ],
    },
  ],
};

export default sidebars;
