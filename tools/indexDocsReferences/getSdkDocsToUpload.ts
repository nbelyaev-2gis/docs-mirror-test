import { optionsArr } from '@shared/docusaurus/plugin-sdk-reference/model/constants';
import { ky } from './kyInstance';
import { RagDocument } from './types';
import { RAG_API_URL, RAG_COLLECTION_NAME } from './env';
import { fetchRefsToUpload } from './fetchRefsToUpload';

export const getSdkDocsToUpload = async () => {
  console.log(`🚀 Получаю список всех документов в коллекции...`);
  const allDocuments = await ky
    .get(`${RAG_API_URL}/collections/${RAG_COLLECTION_NAME}/manual/documents`)
    .json<RagDocument[]>()
    .catch((e) => {
      console.log('❌ Не удалось получить список всех документов в RAG');
      throw e;
    });

  console.log(`📥 Скачиваю референсы...`);
  // Используем `allSettled`, чтобы не блокировать выгрузку всех референсов,
  // если только одни из них не скачиваются
  const refsRes = await Promise.allSettled(
    optionsArr.map(({ id, manifestUrl }) => fetchRefsToUpload({ id, manifestUrl, allDocuments })),
  );

  return refsRes;
};
