import React, { type ReactNode } from 'react';
import { cn } from '@shared/utils';
import LinkItem from '@theme/Footer/LinkItem';
import type { Props } from '@theme/Footer/Links/Simple';

import s from './simple.module.css';

function SimpleLinkItem({ item }: { item: Props['links'][number] }) {
  return item.html ? (
    <span
      className={cn('footer__link-item', item.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <LinkItem item={item} />
  );
}

export default function FooterLinksSimple({ links }: Props): ReactNode {
  return (
    <div className={s.links}>
      {links.map((item, i) => (
        <React.Fragment key={i}>
          <SimpleLinkItem item={item} />
        </React.Fragment>
      ))}
    </div>
  );
}
