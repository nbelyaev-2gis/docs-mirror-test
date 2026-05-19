import type { Props as DocRootProps } from '@theme/DocRoot';

export type PageProps<T> = DocRootProps & {
  data: T;
};
