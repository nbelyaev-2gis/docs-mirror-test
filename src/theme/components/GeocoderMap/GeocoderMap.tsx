import React, { memo, useEffect, useState } from 'react';
import { load } from '@2gis/mapgl';
import { Map, MapPointerEvent } from '@2gis/mapgl/types';
import { request } from '@shared/request';
import { logError } from '@shared/log';
import { Typography } from '@shared/uiKit/Typography';
import { Code } from '@shared/uiKit/Code';
import { useEnvConfig } from '@config/hooks';
import { mapExampleStyles } from '@theme/constants/styles';
import { useLocation } from '@docusaurus/router';

export const GeocoderMap = memo(() => {
  const [url, setUrl] = useState('');
  const { APIKEY_MAPGL, APIKEY_PLACES } = useEnvConfig();
  const location = useLocation();

  const getLocale = (pathname: string): 'ru' | 'en' => {
    if (pathname.startsWith('/en')) {
      return 'en';
    }
    return 'ru';
  };

  const currentLocale = getLocale(location.pathname);

  const translations = {
    en: {
      clickPrompt: 'Click on the map to see the URL of the API request',
    },
    ru: {
      clickPrompt: 'Нажмите на карту, чтобы увидеть URL запроса к API',
    },
  };

  const t = translations[currentLocale];

  useEffect(() => {
    let map: Map;
    let geocoderPopup: any;

    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [37.615655, 55.768005],
        zoom: 13,
        maxZoom: 16,
        key: APIKEY_MAPGL,
      });

      map.on('click', async (event: MapPointerEvent) => {
        const { lngLat } = event;

        const reqUrl = `https://catalog.api.2gis.com/3.0/items/geocode?lon=${lngLat[0]}&lat=${lngLat[1]}&fields=items.point&key=${APIKEY_PLACES}`;

        setUrl(getSafeApiUrl(reqUrl));

        try {
          const { meta, result } = await request<{
            meta: {
              code: number;
            };
            result?: {
              items: Array<{
                address_name?: string;
                name?: string;
              }>;
            };
          }>(reqUrl);

          if (meta.code >= 200 && meta.code < 300 && result && result.items?.length > 0) {
            if (geocoderPopup) {
              geocoderPopup.destroy();
            }
            geocoderPopup = new mapglAPI.HtmlMarker(map, {
              coordinates: lngLat,
              html: `<div class="popup">${
                result.items[0].address_name || result.items[0].name
              }</div>`,
            });
          }

          if (meta.code >= 400) {
            logError({
              message: 'GeocoderMap response error',
              level: 'error',
              id: 'gcmap',
              payload: {
                type: 'ApiNetworkError',
                subtype: 'GeocoderMap',
                data: JSON.stringify({
                  url: reqUrl,
                  status: meta.code,
                }),
              },
            });
          }
        } catch (e) {
          logError({
            message: 'GeocoderMap request error',
            level: 'error',
            id: 'gmape',
            payload: {
              type: 'ApiNetworkError',
              subtype: 'GeocoderMap',
              stack: (e as Error)?.stack,
              data: JSON.stringify({
                url: reqUrl,
              }),
            },
          });
        }
      });
    });

    return () => map && map.destroy();
  }, []);

  return (
    <>
      <style>
        {`.popup {
          padding: 5px;
          background: #fff;
        }`}
      </style>
      <Typography>
        <div id="map-container" style={mapExampleStyles} />
      </Typography>
      <Code codeString={url || t.clickPrompt} lang={url ? '' : 'markdown'} />
    </>
  );
});
GeocoderMap.displayName = 'GeocoderMap';

function getSafeApiUrl(url: string) {
  const key = url.split('key=')[1]?.split('&')[0];
  if (key) {
    return url.replace(key, 'YOUR_KEY');
  }
  return url;
}
