import ky from 'ky';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getI18nConfig } from '@config/i18n';
import { getUrlFromTemplate } from '../lib/getUrlFromTemplate';
import { SdkReferenceBuildMeta, TypedReferenceBuildMeta } from '../types/meta';
import { LoadedContent, PluginOptions, SidebarInfoMap } from '../types/plugin';
import { SdkReference } from '../types/sdkReference';
import { Manifest } from '../types/manifest';
import { mkdir } from 'node:fs/promises';
import { prepareProps } from '../lib/prepareProps';
import { RefTypes } from '../types/refs/_anyRef';
import { getSortedRefList } from '../lib/getSortedRefList';
import { formatRefItemName } from '../lib/formatRefItemName';
import { RefLink } from '../lib/refLink';
import { sanitizeRefNameForUrl } from '../lib/sanitizeRefNameForUrl';
import { writeFile } from 'node:fs/promises';
import { buildReferenceSidebars } from '../model/buildReferenceSidebars';
import { optionsArr } from '../model/constants';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..', '..', '..', '..', '..');

// @todo переделать на честный i18n
const i18nConfig = getI18nConfig({ brand: '2gis' });

async function loadContent(options: { manifestUrl: string }): Promise<LoadedContent[]> {
  try {
    console.log('load manifest');
    const isDev = process.argv.find((v) => v === 'dev');

    const manifest = await ky
      .get<Manifest>(options.manifestUrl, { retry: { limit: 5, retryOnTimeout: true } })
      .json()
      .catch((e) => {
        console.log(`Не удалось скачать манифест по ссылке ${options.manifestUrl}`);
        throw e;
      });
    console.log('loaded manifest');

    const content: LoadedContent[] = [];
    for (const currentLocale of i18nConfig.locales) {
      // Ключ — версия sdk
      const buildMeta = {} as SdkReferenceBuildMeta;

      for (const { version, referenceUrl } of manifest.versions) {
        if (isDev && version !== manifest.stableVersion) {
          continue;
        }
        const localizedReferenceUrl = referenceUrl[currentLocale];

        if (!localizedReferenceUrl) {
          throw new Error(`"${version}" reference URL для локали ${currentLocale} не найден`);
        }

        const response = await ky
          .get<SdkReference>(localizedReferenceUrl, { retry: { limit: 5, retryOnTimeout: true } })
          .json()
          .catch((e) => {
            console.log(`Не удалось скачать reference по ссылке ${localizedReferenceUrl}`);
            throw e;
          });

        buildMeta[version] = response.refMap;
      }

      content.push({
        locale: currentLocale,
        manifest: isDev
          ? {
              ...manifest,
              versions: manifest.versions.filter(
                ({ version }) => version === manifest.stableVersion,
              ),
            }
          : manifest,
        buildMeta,
      });
    }

    return content;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

const buildReferencePages = async ({
  content,
  options,
  sidebarInfoMap,
}: {
  content: LoadedContent;
  options: PluginOptions;
  sidebarInfoMap: SidebarInfoMap;
}) => {
  const stableVersion = content.manifest.stableVersion;

  for (const [version, referenceItems] of Object.entries(content.buildMeta)) {
    const sdkVersion = stableVersion === version ? 'stable' : version;
    /**
     * Мапина, где ключ — название рефа, значение — тип рефа.
     * В первую очередь мапина нужна для построения кросс-ссылок между рефами.
     */
    const refLink = new RefLink({
      referenceUrlTemplate: options.referenceUrlTemplate,
      sdkVersion,
    });

    const refTypeGroup = Object.values(referenceItems).reduce<TypedReferenceBuildMeta>(
      (acc, { type, props }) => {
        (acc[type] ??= []).push(props);
        refLink.setRef({
          refName: props.name,
          refType: type,
        });
        return acc;
      },
      {},
    );

    const { locale: currentLocale } = content;
    const contentDirPath =
      currentLocale === i18nConfig.defaultLocale
        ? join(rootDir, 'docs')
        : join(rootDir, 'i18n', currentLocale, 'docusaurus-plugin-content-docs', 'current');

    const refMdxTasks = Object.entries(refTypeGroup).map(async ([type, unsortedRefList]) => {
      const refList = getSortedRefList(unsortedRefList);

      const path = getUrlFromTemplate(options.referenceUrlTemplate, {
        baseUrl: '/',
        refType: type,
        sdkVersion,
      }).split('/');
      const referenceFilename = `${path.pop()}.mdx`;
      const versionDirPath = path.join('/');
      const resultDocPath = join(contentDirPath, versionDirPath, referenceFilename);

      const { replaceId } = options.sidebar;

      if (!sidebarInfoMap[replaceId]) {
        sidebarInfoMap[replaceId] = [];
      }

      let existingGroup = sidebarInfoMap[replaceId].find(
        (group) => group.sidebar.fileName === options.sidebar.fileName,
      );

      if (!existingGroup) {
        existingGroup = {
          versions: {},
          sidebar: options.sidebar,
        };
        sidebarInfoMap[replaceId].push(existingGroup);
      }

      existingGroup.versions[version] = versionDirPath.slice(1);

      let docContent = '';
      for (const props of refList) {
        let formattedH2 = formatRefItemName(props.name);
        if (formattedH2.includes('<no name provided>')) {
          formattedH2 = 'no_name_provided';
        }

        try {
          const { props: preparedProps } = prepareProps(props, type as RefTypes, {
            refLink,
          });

          docContent += `\
## ${formattedH2} {#${sanitizeRefNameForUrl(props.name)}}

<AnyObject
    data={${JSON.stringify({
      props: preparedProps,
      sdkVersion,
    })}}
/>

`;
        } catch (error) {
          if (
            error &&
            typeof error === 'object' &&
            'message' in error &&
            typeof error.message === 'string'
          ) {
            throw new Error(`In file ${versionDirPath}: \n ${error.message}`);
          }
        }
      }

      const resultDocDir = dirname(resultDocPath);
      await mkdir(resultDocDir, { recursive: true });

      await writeFile(resultDocPath, docContent);
    });

    await Promise.all(refMdxTasks);

    if (refLink.problematicCrossLinks.size > 0) {
      console.warn(
        `\
References without links (${refLink.problematicCrossLinks.size}) in ${options.id}, ${version}:
${Array.from(refLink.problematicCrossLinks).join(', ')}`,
      );
    }
  }
};

async function runner() {
  const start = performance.now();
  console.log('run sdk pages builder');

  const contentLoadTasks = optionsArr.map(
    async (
      options,
    ): Promise<{
      content: LoadedContent[];
      options: PluginOptions;
    }> => {
      const loadedContent = await loadContent(options);

      return {
        content: loadedContent,
        options,
      };
    },
  );

  const sidebarInfoMap: SidebarInfoMap = {};

  const optionsContent = await Promise.all(contentLoadTasks);
  const buildReferencePagesTasks = optionsContent.map(async ({ content: contentArr, options }) => {
    return await Promise.all(
      contentArr.map(async (content) => {
        return await buildReferencePages({ content, options, sidebarInfoMap });
      }),
    );
  });

  await Promise.all(buildReferencePagesTasks).catch((e) => {
    throw new Error(e);
  });

  await buildReferenceSidebars(sidebarInfoMap);

  const end = performance.now();
  console.log('sdk builder took ', ((end - start) / 1000).toFixed(2), ' seconds');
}
runner();
