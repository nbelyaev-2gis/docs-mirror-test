import { chunkArray } from './chunkArray';
import { RAG_API_URL, RAG_COLLECTION_NAME, LOCALE } from './env';
import { filterAlreadyProcessingRefs } from './filterAlreadyProcessingRefs';
import { pollJob } from './pollJob';
import { uploadRefs } from './uploadRefs';
import { getOpenApiDocuments } from './getOpenApiDocsToUpload';
import { getSdkDocsToUpload } from './getSdkDocsToUpload';

/** Максимальное кол-во файлов для выгрузки в RAG одним запросом */
const CHUNK_SIZE = 50;

const main = async () => {
  console.log(
    `🌳 RAG_API_URL=${RAG_API_URL}\n🌳 RAG_COLLECTION_NAME=${RAG_COLLECTION_NAME}\n🌳 LOCALE=${LOCALE}`,
  );

  const openApiDocs = await getOpenApiDocuments();
  const sdkRefs = await getSdkDocsToUpload();

  const allRefs = [...openApiDocs, ...sdkRefs];

  const refsToUpload = allRefs
    .filter((res) => res.status === 'fulfilled')
    .flatMap((res) => res.value);

  if (refsToUpload.length === 0) {
    throw new Error('❌ Нет новых референсов для загрузки в RAG, что-то пошло не так');
  }

  const { filteredRefs, currentJobs } = await filterAlreadyProcessingRefs(refsToUpload);

  const chunks = chunkArray(filteredRefs, CHUNK_SIZE);

  if (chunks.length > 0) {
    const logSeparator = '\n  📄 ';
    console.log(
      `📤 Загружаю ${filteredRefs.length} референсов в RAG, ${chunks.length} чанков:\n`,
      chunks
        .map(
          (c, idx) =>
            `📦 Чанк #${idx + 1} (${c.length} референсов):${logSeparator}${c
              .map((r) => r.filename)
              .join(logSeparator)}`,
        )
        .join('\n'),
    );
  } else {
    console.log('ℹ️ Нет референсов для загрузки в RAG, перехожу к поллингу джоб...');
  }
  const uploadRes = await Promise.all(
    chunks.map((refs, idx) => uploadRefs({ refs, chunkIdx: idx })),
  );

  const jobs = uploadRes
    .flat()
    .flatMap(({ job_id, filename }) => {
      if (!job_id) return [];
      return { id: job_id, filename };
    })
    .concat(currentJobs);

  console.log('🔁 Начинаю поллинг джоб...');
  const pollingRes = await Promise.allSettled(jobs.map((j, idx) => pollJob({ ...j, idx })));

  if (
    allRefs.some((res) => res.status === 'rejected') ||
    pollingRes.some((res) => res.status === 'rejected')
  ) {
    // Чтобы заметить ошибку в CI
    process.exit(1);
  }

  console.log('🎉 Все референсы успешно загружены и обработаны RAG');
};

main();
