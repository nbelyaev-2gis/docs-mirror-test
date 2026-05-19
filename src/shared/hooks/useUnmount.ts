import { useEffect } from 'react';
import useLatest from '@shared/hooks/useLatest';

export const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};

export default useUnmount;
