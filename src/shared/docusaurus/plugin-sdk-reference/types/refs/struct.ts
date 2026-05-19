import type { AnyRefProps } from './_anyRef';
import { PreparedMethodProps } from 'shared/docusaurus/plugin-sdk-reference/types/refs/method';

export type StructType = 'struct';

export interface StructRef {
  type: StructType;
  props: StructProps;
}

export interface StructProps {
  name: AnyRefProps['name'];
  constructorMethods?: AnyRefProps['constructorMethods'];
  description?: AnyRefProps['description'];
  implement?: AnyRefProps['implement'];
  methods?: AnyRefProps['methods'];
  properties?: AnyRefProps['properties'];
}

export interface PreparedStructProps extends StructProps {
  metaType: StructType;
  methods?: PreparedMethodProps[];
  constructorMethods?: PreparedMethodProps[];
}
