import { transformFile } from 'swagger-markdown';
import { LOCALE } from './env';
import { getOpenApiSpec } from '@config/openApi/getOpenApiSpecs';
import { OpenapiUrl } from '@config/openApi/types';
import { openApiData } from '@config/openApi/openApiData';
import { Locale } from '@config/i18n';
import { RefToUpload } from './types';

function getOpenApiPublicSpecs(data: { id: string; openapiUrl: OpenapiUrl }[], locale: Locale) {
  return data.reduce<Array<ReturnType<typeof getOpenApiSpec>>>((acc, { id, openapiUrl }) => {
    if (
      typeof openapiUrl === 'object' &&
      'public' in openapiUrl &&
      locale in openapiUrl['public']
    ) {
      acc.push(getOpenApiSpec(id, openapiUrl['public'][locale]));
    }

    return acc;
  }, []);
}

/**
 * Обрабатывает один OpenAPI документ: загружает, конвертирует в Markdown и создает RefToUpload
 * @param urlSpec - Объект с URL OpenAPI спецификации
 * @returns Promise<RefToUpload> - Обработанный документ
 */
const processOpenApiDocument = async (urlSpec: string): Promise<RefToUpload> => {
  console.log(`🔄 Обрабатываю OpenAPI документ: ${urlSpec}`);

  try {
    const markdown = await transformFile({ input: urlSpec });
    const urlObj = new URL(urlSpec);

    // Убираем extension из имени файла
    const pathWithoutLeadingSlash = urlObj.pathname.slice(1);
    const originalPath = pathWithoutLeadingSlash.replace(/\.[^.]*$/, '');

    console.log(`✅ Успешно обработан OpenAPI документ: ${urlSpec}`);
    console.log(`📂 Путь в RAG: openapi/${originalPath}`);

    return {
      reference: new Blob([markdown], { type: 'text/markdown' }),
      filename: `openapi/${originalPath}`,
    };
  } catch (error) {
    console.error(`❌ Ошибка при обработке OpenAPI документа ${urlSpec}:`, error);
    throw new Error(
      `Не удалось обработать OpenAPI документ ${urlSpec}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
};

/**
 * Основная функция для получения и обработки OpenAPI документов
 *
 * Алгоритм:
 * 1. Получает список URL-ов всех OpenAPI спецификаций
 * 2. Параллельно загружает и конвертирует их в Markdown (используя swagger-parser + swagger-markdown)
 * 3. Создает Blob-объекты для загрузки в RAG
 *
 * @returns Promise<PromiseSettledResult<RefToUpload>[]> - Массив результатов (успешных и ошибок)
 */
export const getOpenApiDocuments = async (): Promise<PromiseSettledResult<RefToUpload>[]> => {
  const openApiUrls = getOpenApiPublicSpecs(openApiData, LOCALE as Locale);

  console.log(
    `📥 Получаю OpenAPI документы для индексации (найдено ${openApiUrls.length} спецификаций)`,
  );

  if (openApiUrls.length === 0) {
    console.warn('⚠️ Не найдено OpenAPI спецификаций для загрузки, проверьте конфигурацию');
    return [];
  }

  return await Promise.allSettled(openApiUrls.map((url) => processOpenApiDocument(url.spec)));
};
