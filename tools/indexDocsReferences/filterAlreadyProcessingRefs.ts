import { ragApi } from './kyInstance';
import { Job, RefToUpload } from './types';
import { RAG_COLLECTION_NAME } from './env';

type Result = {
  filteredRefs: RefToUpload[];
  currentJobs: Array<{ id: string; filename: string }>;
};

export const filterAlreadyProcessingRefs = async (refs: RefToUpload[]): Promise<Result> => {
  console.log('🚀 Получаю список джоб в коллекции...');
  const jobList = await ragApi
    .get(`jobs?collection_name=${RAG_COLLECTION_NAME}`)
    .json<Job[]>()
    .catch((e) => {
      console.error('❌ Ошибка получения списка джоб', e);
      throw e;
    });

  const currentJobs = jobList.filter(
    (j): j is Job & { filename: string } =>
      (j.status === 'active' || j.status === 'pending') &&
      !!j.filename &&
      // Берём только те джобы, которые соответствуют рефам, чтобы не ждать окончания левых джоб
      refs.some((r) => r.filename === j.filename),
  );

  if (currentJobs.length > 0) {
    const separator = '\n  ⏭️ ';
    console.log(
      `ℹ️ В данный момент в RAG обрабатывается ${currentJobs.length} референсов, пропускаю их повторную выгрузку:${separator}${currentJobs.map((j) => j.filename).join(separator)}`,
    );
  } else {
    console.log('ℹ️ В данный момент в RAG нет обрабатываемых референсов');
  }

  return currentJobs.reduce<Result>(
    (acc, job) => {
      acc.filteredRefs = acc.filteredRefs.filter((r) => r.filename !== job.filename);
      acc.currentJobs.push({ id: job.id, filename: job.filename });
      return acc;
    },
    { filteredRefs: refs, currentJobs: [] },
  );
};
