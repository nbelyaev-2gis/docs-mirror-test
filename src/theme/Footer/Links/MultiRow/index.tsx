import React, { type ReactNode } from 'react';
import { cn } from '@shared/utils';
import LinkItem from '@theme/Footer/LinkItem';
import type { Props } from '@theme/Footer/Links/MultiColumn';

import s from './multiRow.module.css';

type RowProps = { rows: Props['columns'] };
type RowType = RowProps['rows'][number];
type ColumnItemType = RowType['items'][number];

function RowLinkItem({ item }: { item: ColumnItemType }) {
  return item.html ? (
    <li
      className={cn('footer__item', item.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}

function Row({ row }: { row: RowType }) {
  return (
    <div className={cn('footer__row', s.footerRow, row.className)}>
      <ul className={cn('footer__items clean-list', s.linksContainer)}>
        {row.items.map((item, i) => (
          <RowLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiRow({ rows }: RowProps): ReactNode {
  return (
    <div className={s.linksWrapper}>
      {rows.map((row, i) => (
        <Row key={i} row={row} />
      ))}
    </div>
  );
}
