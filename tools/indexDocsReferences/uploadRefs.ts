import { ragApi } from './kyInstance';
import { RAG_COLLECTION_NAME } from './env';
import { DocumentsResponse } from './types';

export const uploadRefs = async ({
  refs,
  chunkIdx,
}: {
  refs: Array<{ reference: Blob; filename: string }>;
  chunkIdx: number;
}) => {
  const fd = new FormData();
  refs.forEach(({ reference, filename }) => {
    fd.append('files', reference, filename);
  });

  const resp = await ragApi
    .post(`v2/collections/${RAG_COLLECTION_NAME}/manual/documents`, { body: fd })
    .json<DocumentsResponse>()
    .catch((e) => {
      console.error(`❌ Не удалось загрузить референсы в RAG (чанк #${chunkIdx})`);
      throw e;
    });

  if (resp.some((r) => r.status === 'error')) {
    const erroredFiles = resp.filter((r) => r.status === 'error');
    throw new Error(
      `❌ Ошибка загрузки референсов в RAG (чанк #${chunkIdx}): ${erroredFiles.map((f) => `${f.filename} - ${f.error}`).join('\n')}`,
    );
  }

  return resp;
};
