import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  distancematrixapi: [
    {
      type: 'category',
      label: 'Distance Matrix API',
      items: [
        {
          type: 'doc',
          id: 'api/navigation/distance-matrix/overview',
          label: 'Обзор',
        },
        {
          type: 'doc',
          id: 'api/navigation/distance-matrix/start',
          label: 'Начало работы',
        },
        {
          type: 'doc',
          id: 'api/navigation/distance-matrix/examples',
          label: 'Примеры',
        },
        {
          type: 'category',
          label: 'Справочник API',
          items: [
            {
              type: 'doc',
              id: 'api/navigation/distance-matrix/reference/get_dist_matrix',
              label: '/get_dist_matrix',
            },
            {
              type: 'doc',
              id: 'api/navigation/distance-matrix/reference/async_create_task',
              label: '/async_matrix/create_task/get_dist_matrix',
            },
            {
              type: 'doc',
              id: 'api/navigation/distance-matrix/reference/async_result',
              label: '/async_matrix/result/get_dist_matrix/{task_id}',
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/navigation/distance-matrix/releases',
          label: 'Релизы',
        },
      ],
    },
  ],
};

export default sidebars;
