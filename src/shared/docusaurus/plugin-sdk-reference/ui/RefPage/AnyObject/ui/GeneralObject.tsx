import React, { memo } from 'react';

import { Description } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/Description';
import { InheritList } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/InheritList';
import { MethodProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import { PropertyProps, Ref } from '@shared/docusaurus/plugin-sdk-reference/types/refs/_anyRef';

import s from './generalObject.module.css';
import { Properties } from './Properties';
import { Methods } from './Methods';
import { ConstructorMethods } from './ConstructorMethods';

export interface GeneralObjectProps {
  name: string;
  constructorMethods?: MethodProps[];
  description?: string;
  extendTypes?: Ref[];
  implement?: Ref[];
  inherits?: Ref[];
  methods?: MethodProps[];
  properties?: PropertyProps[];
  members?: PropertyProps[];
}

export const GeneralObject = memo<GeneralObjectProps>(
  ({
    constructorMethods,
    description,
    extendTypes,
    implement,
    inherits,
    methods,
    properties,
    members,
    name,
  }) => {
    const texts = {
      extends: 'Extends: ',
      implements: 'Implements: ',
      extendTypes: 'Extend types: ',
    };

    return (
      <div className={s.container}>
        {description && <Description>{description}</Description>}
        <div className={s.inheritsContainer}>
          <InheritList text={texts.extends} list={inherits} />
          <InheritList text={texts.implements} list={implement} />
          <InheritList text={texts.extendTypes} list={extendTypes} />
        </div>

        <ConstructorMethods constructorMethods={constructorMethods} parentName={name} />
        <Methods methods={methods} parentName={name} />

        <Properties properties={properties} parentName={name} />
        <Properties properties={members} parentName={name} />
      </div>
    );
  },
);

GeneralObject.displayName = 'GeneralObject';
