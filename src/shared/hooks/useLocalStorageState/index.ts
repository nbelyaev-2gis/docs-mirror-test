import { createUseStorageState, type Options } from './model/createUseStorageState';

const useLocalStorageState = createUseStorageState(() =>
  typeof window !== 'undefined' ? window.localStorage : undefined,
);

export { useLocalStorageState, type Options };
