import { memo } from 'react';
import { useBrand } from '@shared/hooks/useBrand';

export const Brand = memo(() => {
  const brand = useBrand();
  return brand.label;
});
Brand.displayName = 'Brand';
