import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';
import { CompletionsResponse } from '../types/api';
import { logChatBotError } from '../lib/logChatBotError';

type Params = {
  threadId: string;
  message: string;
};

/**
 * Отправить сообщение и получить ответ LLM
 *
 * @see https://twogis-api-docs-search.k8s.n3.2gis.io/docs#/Threads/create_completion_threads__thread_id__completions_post
 */
export const getCompletion = async ({ threadId, message }: Params, config?: AxiosRequestConfig) => {
  return axiosInstance
    .post<CompletionsResponse>(
      `/threads/${threadId}/completions`,
      {
        message,
      },
      config,
    )
    .then((res) => res.data)
    .catch((e) => {
      logChatBotError(e);
      throw e;
    });
};
