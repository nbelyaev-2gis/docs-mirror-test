import { Job } from './types';
import { ragApi } from './kyInstance';

const INITIAL_JOB_POLLING_TIMEOUT = 10_000;

export const pollJob = async ({
  id,
  filename,
  idx,
}: {
  id: string;
  filename: string;
  idx: number;
}) => {
  // Увеличиваем таймаут поллинга, чтобы не ддосить RAG при большом кол-ве джоб
  const timeout = INITIAL_JOB_POLLING_TIMEOUT + idx * 300;

  // Большие файлы могут долго обрабатываться в RAG, поэтому ждём до победного.
  // В любом случае, на джобу стоит лимит в 1ч на уровне CI
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, timeout));

    const job = await ragApi
      .get(`jobs/${id}`)
      .json<Job>()
      .catch((e) => {
        console.error(`❌ Ошибка получения джобы ${id}`, e);
      });

    if (job?.status === 'completed') {
      const elapsedMs =
        new Date(job.completed ?? Date.now()).getTime() - new Date(job.created).getTime();
      const elapsedMin = Math.floor(elapsedMs / 60_000);
      const elapsedSec = Math.floor((elapsedMs % 60_000) / 1000);
      console.log(
        `✅ Файл ${filename} успешно обработан RAG за ${elapsedMin} минут и ${elapsedSec} секунд`,
      );
      break;
    }

    if (job?.status === 'error') {
      const error = `❌ Ошибка обработки файла ${filename} RAG: ${job.error}`;
      console.error(error);
      throw new Error(error);
    }
  }
};
