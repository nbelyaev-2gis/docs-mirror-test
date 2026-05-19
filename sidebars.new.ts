import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import aPI from './sidebars/aPI.sidebar';
import androidsdk from './sidebars/androidsdk.sidebar';
import authAPI from './sidebars/authAPI.sidebar';
import categoriesAPI from './sidebars/categoriesAPI.sidebar';
import citylens from './sidebars/citylens.sidebar';
import directionsapi from './sidebars/directionsapi.sidebar';
import distancematrixapi from './sidebars/distancematrixapi.sidebar';
import floorsjsapi from './sidebars/floorsjsapi.sidebar';
import fluttersdk from './sidebars/fluttersdk.sidebar';
import geocoderAPI from './sidebars/geocoderAPI.sidebar';
import geoflow from './sidebars/geoflow.sidebar';
import iossdk from './sidebars/iossdk.sidebar';
import isochroneapi from './sidebars/isochroneapi.sidebar';
import mapgljsapi from './sidebars/mapgljsapi.sidebar';
import mapmatchingapi from './sidebars/mapmatchingapi.sidebar';
import markersAPI from './sidebars/markersAPI.sidebar';
import maptilesapi from './sidebars/maptilesapi.sidebar';
import onpremiseApiPlatform from './sidebars/on-premise-api-platform.sidebar';
import onpremisePro from './sidebars/on-premise-pro.sidebar';
import onpremiseCitylens from './sidebars/on-premise-citylens.sidebar';
import onpremiseGisPlatform from './sidebars/on-premise-gis-platform.sidebar';
import pairsdirectionsapi from './sidebars/pairsdirectionsapi.sidebar';
import photosAPI from './sidebars/photosAPI.sidebar';
import placesAPI from './sidebars/placesAPI.sidebar';
import platformManager from './sidebars/platform-manager.sidebar';
import pro from './sidebars/pro.sidebar';
import radarapi from './sidebars/radarapi.sidebar';
import rasterjsapi from './sidebars/rasterjsapi.sidebar';
import rastertilesapi from './sidebars/rastertilesapi.sidebar';
import regionsAPI from './sidebars/regionsAPI.sidebar';
import reviewsAPI from './sidebars/reviewsAPI.sidebar';
import routingapi from './sidebars/routingapi.sidebar';
import routeplannerapi from './sidebars/routeplannerapi.sidebar';
import styleeditor from './sidebars/styleeditor.sidebar';
import suggestAPI from './sidebars/suggestAPI.sidebar';
import truckdirectionsapi from './sidebars/truckdirectionsapi.sidebar';
import tspapi from './sidebars/tspapi.sidebar';
import staticapi from './sidebars/staticapi.sidebar';
import twinsAPI from './sidebars/twinsAPI.sidebar';
import { buildEnvConfig } from './src/config/env/buildEnvConfig';

const env = buildEnvConfig();

const sidebars: SidebarsConfig = {
  ...aPI,
  ...androidsdk,
  ...(env.DISTRIBUTION_MODE === 'private' ? authAPI : {}),
  ...categoriesAPI,
  ...citylens,
  ...directionsapi,
  ...distancematrixapi,
  ...floorsjsapi,
  ...fluttersdk,
  ...geocoderAPI,
  ...geoflow,
  ...iossdk,
  ...isochroneapi,
  ...mapgljsapi,
  ...mapmatchingapi,
  ...markersAPI,
  ...maptilesapi,
  ...onpremiseApiPlatform,
  ...onpremisePro,
  ...onpremiseCitylens,
  ...onpremiseGisPlatform,
  ...pairsdirectionsapi,
  ...(env.DISTRIBUTION_MODE === 'private' ? photosAPI : {}),
  ...placesAPI,
  ...platformManager,
  ...pro,
  ...radarapi,
  ...rasterjsapi,
  ...rastertilesapi,
  ...regionsAPI,
  ...(env.DISTRIBUTION_MODE === 'private' ? reviewsAPI : {}),
  ...routingapi,
  ...routeplannerapi,
  ...styleeditor,
  ...suggestAPI,
  ...truckdirectionsapi,
  ...tspapi,
  ...staticapi,
  ...twinsAPI,
};

export default sidebars;
