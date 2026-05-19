import React, { memo } from 'react';
import s from './TypeAlias.module.css';
import { cn } from '@shared/utils';
import { DocLink } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/DocLink';
import { SeparatedList } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/SeparatedList';
import { Description } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/Description';
import { refAnchorClassName } from '@shared/docusaurus/plugin-sdk-reference/model/constants';

export interface TypeAliasProps {
  /**
   * Формальное имя функции
   */
  name: string;
  /**
   * Описание функции
   */
  description?: string;
  /**
   *
   */
  aliases?: { name: string }[];
}

export interface TypeAliasHtmlProps extends TypeAliasProps {
  /**
   * id который будет использован для генерации меню
   */
  id?: string;
}

export const TypeAlias = memo(({ description, id, aliases }: TypeAliasHtmlProps) => {
  return (
    <div className={cn(s.wrapper, refAnchorClassName)} id={id}>
      {description && <Description className={s.description}>{description}</Description>}
      {aliases && aliases.length > 0 && (
        <SeparatedList>
          {aliases.map(({ name }) => (
            <DocLink key={name} name={name} />
          ))}
        </SeparatedList>
      )}
    </div>
  );
});

TypeAlias.displayName = 'TypeAlias';
