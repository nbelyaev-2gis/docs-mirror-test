import type { AnyRefProps } from './_anyRef';
import { PreparedMethodProps } from 'shared/docusaurus/plugin-sdk-reference/types/refs/method';

export type ClassType = 'class';

export interface ClassRef {
  type: ClassType;
  props: ClassProps;
}

export interface ClassProps {
  name: AnyRefProps['name'];
  constructorMethods?: AnyRefProps['constructorMethods'];
  description?: AnyRefProps['description'];
  implement?: AnyRefProps['implement'];
  inherits?: AnyRefProps['inherits'];
  methods?: AnyRefProps['methods'];
  properties?: AnyRefProps['properties'];
}

export interface PreparedClassProps extends ClassProps {
  metaType: ClassType;
  methods?: PreparedMethodProps[];
  constructorMethods?: PreparedMethodProps[];
}
