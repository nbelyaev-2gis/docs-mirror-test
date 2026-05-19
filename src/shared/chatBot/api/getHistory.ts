import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';
import { HistoryResponse } from '../types/api';
import { logChatBotError } from '../lib/logChatBotError';

type Params = {
  threadId: string;
};

/**
 * Получить историю сообщений чата
 *
 * @see https://twogis-api-docs-search.k8s.n3.2gis.io/docs#/Threads/get_thread_history_threads__thread_id__history_get
 */
export const getHistory = async ({ threadId }: Params, config?: AxiosRequestConfig) => {
  return axiosInstance<HistoryResponse>(`/threads/${threadId}/history`, config)
    .then((res) => res.data)
    .catch((e) => {
      logChatBotError(e);
      throw e;
    });
};
