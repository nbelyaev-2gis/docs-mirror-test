import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';
import { ScorePayload, ScoreResponse } from '../types/api';

export type Params = {
  threadId: string;
  messageId: number;
} & ScorePayload;

/**
 * Оценить сообщение LLM (лайк / дизлайк)
 *
 * @see https://twogis-api-docs-search.k8s.n3.2gis.io/docs#/Threads/score_message_threads__thread_id___message_id__score_post
 */
export const rateAnswer = async (
  { threadId, messageId, ...payload }: Params,
  config?: AxiosRequestConfig,
) => {
  return axiosInstance
    .post<ScoreResponse>(`/threads/${threadId}/${messageId}/score`, payload, config)
    .then((res) => res.data);
};
