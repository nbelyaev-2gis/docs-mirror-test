import { memo, useMemo } from 'react';
import clsx from 'clsx';
import { HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common';
import { DocsSidebarProvider, useDocRootMetadata } from '@docusaurus/plugin-content-docs/client';
import DocRootLayout from '@theme/DocRoot/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import type { Props } from '@theme/DocRoot';
import { useBrand } from '@shared/hooks/useBrand';
import { replaceBrandVar } from '@theme/components/Brand';

const DocRoot = memo<Props>((props) => {
  const brand = useBrand();

  const currentDocRouteMetadata = useDocRootMetadata(props);

  // Подменяем <Brand /> в сайдбаре (и заодно в хлебных крошках)
  const sidebarItems = useMemo(() => {
    if (!currentDocRouteMetadata?.sidebarItems) return;

    type SidebarItems = NonNullable<(typeof currentDocRouteMetadata)['sidebarItems']>;

    function replaceBrandInSidebar(items: SidebarItems, brand: string): SidebarItems {
      return items.map((item) => {
        if (item.type === 'category') {
          return {
            ...item,
            label: replaceBrandVar(item.label, brand),
            items: replaceBrandInSidebar(item.items, brand),
          };
        }

        if ('label' in item && typeof item.label === 'string') {
          return { ...item, label: replaceBrandVar(item.label, brand) };
        }

        return item;
      });
    }

    return replaceBrandInSidebar(currentDocRouteMetadata.sidebarItems, brand.label);
  }, [currentDocRouteMetadata?.sidebarItems, brand.label]);

  if (!currentDocRouteMetadata) {
    // We only render the not found content to avoid a double layout
    // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
    return <NotFoundContent />;
  }
  const { docElement, sidebarName } = currentDocRouteMetadata;

  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
      <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
        <DocRootLayout>{docElement}</DocRootLayout>
      </DocsSidebarProvider>
    </HtmlClassNameProvider>
  );
});
DocRoot.displayName = 'DocRoot';

export default DocRoot;
