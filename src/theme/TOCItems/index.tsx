import { memo, useMemo } from 'react';
import TOCItems from '@theme-original/TOCItems';
import type TOCItemsType from '@theme/TOCItems';
import type { WrapperProps } from '@docusaurus/types';
import { replaceBrandVar } from '@theme/components/Brand';
import { useBrand } from '@shared/hooks/useBrand';

type Props = WrapperProps<typeof TOCItemsType>;

const TOCItemsWrapper = memo<Props>((props) => {
  const brand = useBrand();

  // На англ локали Docusaurus почему-то не заменяет <Brand />, пришлось подложить соломку
  const toc = useMemo(() => {
    return props.toc.map((i) => ({
      ...i,
      value: replaceBrandVar(i.value, brand.label),
    }));
  }, [brand.label, props.toc]);

  return <TOCItems {...props} toc={toc} />;
});
TOCItemsWrapper.displayName = 'TOCItemsWrapper';

export default TOCItemsWrapper;
