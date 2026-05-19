import { PluginOptions } from 'shared/docusaurus/plugin-sdk-reference';

export const pluginName = 'kit-docs-sdk-reference-plugin';

export const refAnchorClassName = '__nav_anchor';

export const urlTemplateVar = {
  version: ':version',
  refType: ':type',
} as const;

export const optionsArr: PluginOptions[] = [
  {
    id: 'ios',
    manifestUrl: 'https://artifactory.2gis.dev/artifactory/sdk-docs-ios/manifest.json',
    referenceUrlTemplate: 'ios/sdk/reference/:version/:type',
    referenceDirPath: 'ios/sdk/reference',
    sidebar: {
      replaceId: 'iossdk',
      fileName: 'iossdk.sidebar.ts',
      showVersions: true,
    },
  },
  {
    id: 'android',
    manifestUrl: 'https://artifactory.2gis.dev/artifactory/sdk-docs-android/manifest.json',
    referenceUrlTemplate: 'android/sdk/reference/:version/:type',
    referenceDirPath: 'android/sdk/reference',
    sidebar: {
      replaceId: 'androidsdk',
      fileName: 'androidsdk.sidebar.ts',
      showVersions: true,
    },
  },
  {
    id: 'map',
    manifestUrl: 'https://mapgl.2gis.com/api/js/docs/manifest.json',
    referenceUrlTemplate: 'mapgl/reference/:type',
    referenceDirPath: 'mapgl/reference',
    sidebar: {
      replaceId: 'map',
      fileName: 'mapgljsapi.sidebar.ts',
      showVersions: false,
      showOnlyLatest: true,
    },
  },
  {
    id: 'ruler',
    manifestUrl: 'https://unpkg.com/@2gis/mapgl-ruler@^2/dist/docs/manifest.json',
    referenceUrlTemplate: 'mapgl/plugins/ruler/reference/:type',
    referenceDirPath: 'mapgl/plugins/ruler/reference',
    sidebar: {
      replaceId: 'ruler',
      fileName: 'mapgljsapi.sidebar.ts',
      showVersions: false,
    },
  },
  {
    id: 'deck2gisLayer',
    manifestUrl: 'https://unpkg.com/@2gis/deck2gis-layer@^2/dist/docs/manifest.json',
    referenceUrlTemplate: 'mapgl/plugins/deck2gisLayer/reference/:type',
    referenceDirPath: 'mapgl/plugins/deck2gisLayer/reference',
    sidebar: {
      replaceId: 'deck2gisLayer',
      fileName: 'mapgljsapi.sidebar.ts',
      showVersions: false,
    },
  },
  {
    id: 'gltf2',
    manifestUrl: 'https://unpkg.com/@2gis/mapgl-gltf@^2/dist/docs/manifest.json',
    referenceUrlTemplate: 'mapgl/plugins/gltf2/reference/:type',
    referenceDirPath: 'mapgl/plugins/gltf2/reference',
    sidebar: {
      replaceId: 'gltf2',
      fileName: 'mapgljsapi.sidebar.ts',
      showVersions: false,
    },
  },
  {
    id: 'gltf',
    manifestUrl: 'https://unpkg.com/@2gis/mapgl-gltf@^1/dist/docs/manifest.json',
    referenceUrlTemplate: 'mapgl/plugins/gltf/reference/:type',
    referenceDirPath: 'mapgl/plugins/gltf/reference',
    sidebar: {
      replaceId: 'gltf',
      fileName: 'mapgljsapi.sidebar.ts',
      showVersions: false,
    },
  },
  {
    id: 'clusterer',
    manifestUrl: 'https://unpkg.com/@2gis/mapgl-clusterer@^2/dist/docs/manifest.json',
    referenceUrlTemplate: 'mapgl/plugins/clusterer/reference/:type',
    referenceDirPath: 'mapgl/plugins/clusterer/reference',
    sidebar: {
      replaceId: 'clusterer',
      fileName: 'mapgljsapi.sidebar.ts',
      showVersions: false,
    },
  },
  {
    id: 'directions',
    manifestUrl: 'https://unpkg.com/@2gis/mapgl-directions@^2/dist/docs/manifest.json',
    referenceUrlTemplate: 'mapgl/plugins/directions/reference/:type',
    referenceDirPath: 'mapgl/plugins/directions/reference',
    sidebar: {
      replaceId: 'directions',
      fileName: 'mapgljsapi.sidebar.ts',
      showVersions: false,
    },
  },
];
