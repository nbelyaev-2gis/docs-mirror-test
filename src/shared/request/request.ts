import axios, { AxiosRequestConfig } from 'axios';
import { logError } from '@shared/log';

export function request<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
  const { method = 'get', headers, data, ...restConfig } = config;

  return axios({
    url,
    method,
    headers,
    data,
    ...restConfig,
  })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      logError({
        message: 'Request failed',
        level: 'error',
        id: 'nfjse',
        payload: {
          type: 'ApiNetworkError',
          stack: e?.stack,
          data: JSON.stringify({
            url,
            method,
            status: e.response?.status,
            statusText: e.response?.statusText,
          }),
        },
      });

      throw e;
    });
}
