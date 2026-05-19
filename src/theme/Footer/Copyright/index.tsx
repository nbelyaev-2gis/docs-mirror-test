import React, { type ReactNode } from 'react';
import { cn } from '@shared/utils';
import type { Props } from '@theme/Footer/Copyright';

import s from './copyright.module.css';

export default function FooterCopyright({ copyright }: Props): ReactNode {
  return (
    <div
      className={cn('footer__copyright', s.footerCopyright)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: copyright }}
    />
  );
}
