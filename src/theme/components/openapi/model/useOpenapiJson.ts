// @ts-expect-error не разобрался, откуда берется пакет
import useSpecData from '@theme/useSpecData';
import { OpenapiData } from '../types/plugin';

export const useOpenapiJson = (id: string) => {
  const data = useSpecData(id);
  return data as OpenapiData | undefined;
};
