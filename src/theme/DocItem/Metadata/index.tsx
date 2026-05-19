import { memo, useMemo } from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useBrand } from '@shared/hooks/useBrand';
import { replaceBrandVar } from '@theme/components/Brand';

const DocItemMetadata = memo(() => {
  const { metadata, frontMatter, assets } = useDoc();
  const brand = useBrand();

  // Если title не указан в mdx, Docusaurus генерирует его из первого заголовка в документе.
  // Такой заголовок может содержать <Brand />, который нужно явно обработать
  const title = useMemo(() => {
    return replaceBrandVar(metadata.title, brand.label);
  }, [metadata.title, brand.label]);

  return (
    <PageMetadata
      title={title}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image}
    />
  );
});
DocItemMetadata.displayName = 'DocItemMetadata';

export default DocItemMetadata;
