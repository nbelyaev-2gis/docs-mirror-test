import React, { memo, useMemo, NamedExoticComponent } from 'react';
import { Props as DocRootProps } from '@theme/DocRoot';
import { Method } from '../../Method';
import { MethodProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import {
  GeneralObject,
  GeneralObjectProps,
} from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/AnyObject/ui/GeneralObject';
import {
  TypeAlias,
  TypeAliasProps,
} from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/TypeAlias';
import { MethodWithProps } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/Method/ui/Method';
import {
  PropertyProps,
  Ref,
  RefTypes,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/_anyRef';

export interface AnyObjectProps extends DocRootProps {
  data: {
    props: {
      name: string;
      constructorMethods?: MethodProps[];
      description?: string;
      extendTypes?: Ref[];
      implement?: Ref[];
      inherits?: Ref[];
      methods?: MethodProps[];
      properties?: PropertyProps[];
      metaType: RefTypes;
    };
    sdkVersion: string;
  };
}

const components: Record<
  RefTypes,
  NamedExoticComponent<GeneralObjectProps | TypeAliasProps | MethodWithProps>
> = {
  class: GeneralObject,
  extension: GeneralObject,
  enumeration: GeneralObject,
  interface: GeneralObject,
  method: Method,
  struct: GeneralObject,
  typeAlias: TypeAlias,
};

export const AnyObject = memo<AnyObjectProps>(({ data }) => {
  const { props } = data;

  const Component = components[props.metaType];

  const memoizedProps = useMemo(() => props, []);

  if (!Component) return null;

  return <Component {...memoizedProps} />;
});

AnyObject.displayName = 'AnyObject';
