import React, { type ReactNode } from 'react';

import { isMultiColumnFooterLinks } from '@docusaurus/theme-common';
import type { Props } from '@theme/Footer/Links';

import FooterLinksMultiRow from '../Links/MultiRow';
import FooterLinksSimple from '../Links/Simple';

export default function FooterLinks({ links }: Props): ReactNode {
  return isMultiColumnFooterLinks(links) ? (
    <FooterLinksMultiRow rows={links} />
  ) : (
    <FooterLinksSimple links={links} />
  );
}
