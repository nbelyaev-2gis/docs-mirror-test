import React, { memo } from 'react';
import { Ref } from '@shared/docusaurus/plugin-sdk-reference/types/refs/_anyRef';
import s from './DocLink.module.css';
import Link from '@docusaurus/Link';

export const DocLink = memo(({ name, refLink }: Ref) => {
  if (refLink) {
    return (
      <Link className={s.docLink} href={refLink}>
        {name}
      </Link>
    );
  }

  return <span className={s.docLink}>{name}</span>;
});

DocLink.displayName = 'DocLink';
