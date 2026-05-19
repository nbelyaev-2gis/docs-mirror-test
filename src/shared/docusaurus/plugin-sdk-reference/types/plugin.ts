import type { TOCItem } from '@docusaurus/mdx-loader';
import type { Manifest } from './manifest';
import type { SdkReferenceBuildMeta } from './meta';
import { Props as DocSidebarProps } from '@theme/DocSidebar';

export type LoadedContent = {
  locale: string;
  manifest: Manifest;
  buildMeta: SdkReferenceBuildMeta;
};

export type PluginOptions = {
  /** Название sdk как идентификатор */
  id: string;

  manifestUrl: string;

  /**
   * URL-path, по которому будет строиться дерево страниц референсов.
   *
   * Возможные переменные в шаблоне,
   *
   * - `:version` — версия sdk;
   *
   * - `:type` — тип референса (class, interface, struct и пр.).
   */
  referenceUrlTemplate: string;
  /**
   * Путь, по которому в приложении будут находиться элементы скачанные с манифеста.
   */
  referenceDirPath: string;
  sidebar: {
    /**
     * Уникальный идентификатор, который будет использоваться как placeholder
     * для замены в дереве сайдбаров.
     */
    replaceId: string;

    /**
     * Название сайдбара (например, 'mapgljsapi'), в котором будут
     * размещены данные из манифеста.
     */
    fileName: string;

    /**
     * Флаг, определяющий, нужно ли отображать версии в заголовках категорий.
     * Если true — в названиях категорий будет присутствовать номер версии.
     */
    showVersions: boolean;

    /**
     * Флаг, определяющий, нужно ли отображать все версии в сайдбаре или только последнюю.
     */
    showOnlyLatest?: boolean;
  };
};

type SdkSidebarItem = DocSidebarProps['sidebar'][number];

export type SdkGlobalData = {
  /** Ключ — версия sdk */
  sdkReferenceSidebar: Record<string, SdkSidebarItem[]>;
  /** Ключ — 'версия sdk/тип из референса' */
  sdkReferenceTOC: Record<string, TOCItem[]>;
};

/**
 * Словарь всех сайдбаров с группировкой по имени и идентификатору замены.
 * Ключ — это `replaceId`, значение — массив групп сайдбаров
 */
export type SidebarInfoMap = {
  [replaceId: string]: SidebarInfoGroup[];
};

export interface SidebarInfoGroup {
  /**
   * Словарь версий, где ключ — название версии (например, 'v1.1.1', '2.1.3'),
   * а значение — путь до директории
   */
  versions: Record<string, string>;
  /**
   * Конфигурация сайдбара
   */
  sidebar: NonNullable<PluginOptions['sidebar']>;
}
