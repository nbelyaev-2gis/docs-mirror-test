import { default as kyDefault } from 'ky';
import { RAG_API_URL } from './env';

export const ky = kyDefault.create({
  retry: { limit: 3, retryOnTimeout: true, jitter: true },
  timeout: 30_000,
});

/**
 * Ky instance для работы с RAG API
 * @see https://ai-rag-api.k8s.n3.2gis.io/docs
 */
export const ragApi = ky.extend({
  prefixUrl: RAG_API_URL,
});
