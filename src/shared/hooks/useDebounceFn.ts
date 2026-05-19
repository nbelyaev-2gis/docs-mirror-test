import debounce from 'lodash.debounce';
import { useMemo } from 'react';
import { useLatest } from './useLatest';
import { useUnmount } from './useUnmount';

export interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

type Noop = (...args: any[]) => any;

export const useDebouncedFn = <T extends Noop>(fn: T, options?: DebounceOptions) => {
  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const debounced = useMemo(
    () =>
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    debounced.cancel();
  });

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
};
