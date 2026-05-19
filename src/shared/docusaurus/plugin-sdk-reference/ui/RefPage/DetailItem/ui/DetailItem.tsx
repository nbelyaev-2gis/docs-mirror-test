import React, { memo } from 'react';
import s from './DetailItem.module.css';
import { cn } from '@shared/utils';
import Heading from '@theme/Heading';
import { DocLink } from '../../DocLink';
import { SeparatedList } from '../../SeparatedList';
import { ParameterProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import { Description } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/Description';
import { generateAnchor } from '@shared/docusaurus/plugin-sdk-reference/lib/generateAnchor';
import { PropertyProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/_anyRef';

type AdditionalProps = {
  id?: string;
  parentName: string;
  isParameter?: boolean;
};

type Props = (ParameterProps & AdditionalProps) | (PropertyProps & AdditionalProps);

export const DetailItem = memo<Props>(
  ({ name, description, types, isOptional = false, isParameter = false, parentName }) => {
    // В рамках класса параметры методов могут иметь одинаковое название,
    // поэтому для параметров якоря не делаем
    const anchor = isParameter ? undefined : generateAnchor([parentName, name]);
    return (
      <>
        <Heading id={anchor} as="h4" className={cn(s.name, s.refAnchor)}>
          {name}
          {isOptional && '?'}
        </Heading>
        <div className={s.body}>
          {types && (
            <div>
              <SeparatedList>
                {types
                  .filter(({ name }) => name) // name может быть пустым
                  .map((type) => (
                    <DocLink key={type.name} {...type} />
                  ))}
              </SeparatedList>
            </div>
          )}
          {description && <Description>{description}</Description>}
        </div>
      </>
    );
  },
);

DetailItem.displayName = 'Property';
