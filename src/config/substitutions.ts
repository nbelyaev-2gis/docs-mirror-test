type DynamicSubstitutions = {
  __BASE_URL__: string;
};

export const getSubstitutions = (dynamicSubstitutions: DynamicSubstitutions) => ({
  __MAPGL_API_URL__: 'https://mapgl.2gis.com/api/js/v1',
  __MAPGL_PLUGIN_CLUSTERER_URL__: 'https://unpkg.com/@2gis/mapgl-clusterer@^2/dist/clustering.js',
  __MAPGL_PLUGIN_DIRECTIONS_URL__: 'https://unpkg.com/@2gis/mapgl-directions@^2/dist/directions.js',
  __MAPGL_PLUGIN_RULER_URL__: 'https://unpkg.com/@2gis/mapgl-ruler@^2/dist/ruler.js',
  '__MAPGL_PLUGIN_DECK2GIS-LAYER_URL__':
    'https://unpkg.com/@2gis/deck2gis-layer@^2/dist/deck2gislayer.js',
  __MAPGL_PLUGIN_GLTF_URL__: 'https://unpkg.com/@2gis/mapgl-gltf@^1/dist/bundle.js',
  __MAPGL_PLUGIN_GLTF2_URL__: 'https://unpkg.com/@2gis/mapgl-gltf@^2/dist/bundle.js',
  __DECKGL_URL__: 'https://unpkg.com/deck.gl@^8/dist.min.js',
  __ONPREMISE_VERSION__: '1.32.0',
  ...dynamicSubstitutions,
});
