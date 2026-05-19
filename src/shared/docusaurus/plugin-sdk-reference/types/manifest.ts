import type { SdkReferenceMeta } from './meta';

export type Manifest = {
  /** Номер semver текущей стабильной версии */
  stableVersion: string;

  /** Номер мажорной версии release candidate */
  prereleaseMajorVersion?: string;

  /** Перечисление всех возможных версий референса */
  versions: SdkReferenceMeta[];
};
