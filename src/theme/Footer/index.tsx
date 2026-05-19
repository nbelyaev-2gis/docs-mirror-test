import React, { type ReactNode } from 'react';

import { isMultiColumnFooterLinks, useThemeConfig } from '@docusaurus/theme-common';
import FooterLinks from './Links';
import FooterCopyright from './Copyright';
import FooterLayout from './Layout';

function Footer(): ReactNode {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, style } = footer;

  const isMultiRow = isMultiColumnFooterLinks(links);

  return (
    <FooterLayout
      style={style}
      logo={undefined}
      isMultiRow={isMultiRow}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}

export default React.memo(Footer);
