import { useCustomFields } from '@config/hooks/useCustomFields';

export const useBrand = () => {
  const { brand } = useCustomFields();
  return brand;
};
