import React, { memo } from 'react';
import { DocLink } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/DocLink';
import { Description } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/Description';
import { ResultProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import s from './result.module.css';

export const Result = memo<ResultProps>(({ types, description }) => {
  return (
    <>
      <div className={s.docTitle}>Returns</div>
      <div className={s.docItem}>
        {types.map((type) => (
          <DocLink key={type.name} {...type} />
        ))}
        {description && <Description>{description}</Description>}
      </div>
    </>
  );
});

Result.displayName = 'Result';
