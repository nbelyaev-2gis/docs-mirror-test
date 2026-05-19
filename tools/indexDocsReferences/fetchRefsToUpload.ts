import { PluginOptions } from '@shared/docusaurus/plugin-sdk-reference';
import { Manifest } from '@shared/docusaurus/plugin-sdk-reference/types/manifest';
import { SdkReferenceMeta } from '@shared/docusaurus/plugin-sdk-reference/types/meta';
import { RagDocument, RefToUpload } from './types';
import { ky } from './kyInstance';
import { LOCALE } from './env';

export const fetchRefsToUpload = async ({
  id,
  manifestUrl,
  allDocuments,
}: Pick<PluginOptions, 'id' | 'manifestUrl'> & { allDocuments: RagDocument[] }) => {
  const manifest = await ky
    .get(manifestUrl)
    .json<Manifest>()
    .catch((e) => {
      console.error(`❌ Не удалось скачать манифест по ссылке ${manifestUrl}`, e);
      throw e;
    });

  const refs = await Promise.all(
    manifest.versions.reduce<Promise<RefToUpload>[]>((acc, { version, referenceUrl }) => {
      const { localizedReferenceUrl, filename, isStable } = processVersion({
        version,
        referenceUrl,
        id,
        stableVersion: manifest.stableVersion,
      });

      // Всегда выгружаем stable версию
      const shouldUploadToRag = isStable || !allDocuments.some((doc) => doc.filename === filename);

      if (!shouldUploadToRag) {
        console.log(`⏭️ Файл ${filename} уже загружен в RAG, пропускаем`);
        return acc;
      }

      acc.push(
        (async () => {
          const reference = await downloadRef(localizedReferenceUrl);
          return { reference, filename };
        })(),
      );

      return acc;
    }, []),
  );

  return refs;
};

const processVersion = ({
  version,
  referenceUrl,
  id,
  stableVersion,
}: Pick<SdkReferenceMeta, 'version' | 'referenceUrl'> & { stableVersion: string; id: string }) => {
  const localizedReferenceUrl = referenceUrl[LOCALE];

  if (!localizedReferenceUrl) {
    const message = `❌ "${version}" reference URL для локали ${LOCALE} не найден`;
    console.error(message);
    throw new Error(message);
  }

  const isStable = version === stableVersion;
  const versionSlug = isStable ? 'stable' : version;
  const filename = `reference/${id}/version/${versionSlug}.json`;

  return { localizedReferenceUrl, filename, isStable };
};

const downloadRef = async (url: string) => {
  const reference = await ky
    .get(url)
    .blob()
    .catch((e) => {
      console.error(`❌ Не удалось скачать reference по ссылке ${url}`, e);
      throw e;
    });

  return reference;
};
