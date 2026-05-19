import React, { type ReactNode } from 'react';
import { cn } from '@shared/utils';
import type { Props } from '@theme/Footer/Layout';

import s from './layout.module.css';

export default function FooterLayout({
  style,
  links,
  copyright,
  isMultiRow,
}: Props & { isMultiRow: boolean }): ReactNode {
  return (
    <footer
      className={cn('footer', s.footer, {
        'footer--dark': style === 'dark',
      })}
    >
      <div
        className={cn(
          'container container-fluid',
          s.contentWrapper,
          !isMultiRow && s.singleRowWrapper,
        )}
      >
        {copyright}
        {links}
      </div>
    </footer>
  );
}
