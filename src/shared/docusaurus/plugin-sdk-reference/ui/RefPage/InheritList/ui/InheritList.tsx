import React, { memo } from 'react';
import s from './inheritList.module.css';

import { DocLink } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/DocLink';
import { SeparatedList } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/SeparatedList';
import { Ref } from '@shared/docusaurus/plugin-sdk-reference/types/refs/_anyRef';

export interface InheritListProps {
  text: string;
  list?: Ref[];
}
export const InheritList = memo(({ text, list = [] }: InheritListProps) => {
  if (list.length === 0) {
    return null;
  }

  return (
    <div key={text} className={s.inheritsList}>
      <span>{text}</span>
      <SeparatedList>
        {list.map((inheritFrom, i) => (
          <DocLink key={`${i + 1}-${inheritFrom.name}`} {...inheritFrom} />
        ))}
      </SeparatedList>
    </div>
  );
});
InheritList.displayName = 'InheritList';
