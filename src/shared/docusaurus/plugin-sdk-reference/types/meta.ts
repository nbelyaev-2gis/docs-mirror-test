import { Reference, SdkReference } from './sdkReference';

export type SdkReferenceMeta = {
  /** Semver */
  version: string;

  /** Ссылки до i18n JSON референса. Ключ — язык (ru, en). */
  referenceUrl: Record<string, string>;
  // date?: string;

  /** Название раздела навигации, на котором будет открываться страница версии,
   * если не задан - будет открыт первый по алфавиту пункт навигации
   */
  defaultReference?: string;
};

export type SdkReferenceBuildMeta = {
  [version: string]: SdkReference['refMap'];
};

export type TypedReferenceBuildMeta = {
  [K in Reference as K['type']]?: Array<K['props']>;
};

export type TypedReferenceProps = NonNullable<
  TypedReferenceBuildMeta[keyof TypedReferenceBuildMeta]
>;
