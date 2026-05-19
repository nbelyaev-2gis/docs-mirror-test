import type { AnyRefProps } from './_anyRef';
import { PreparedMethodProps } from 'shared/docusaurus/plugin-sdk-reference/types/refs/method';

export type InterfaceType = 'interface';

export interface InterfaceRef {
  type: InterfaceType;
  props: InterfaceProps;
}

export interface InterfaceProps {
  name: AnyRefProps['name'];
  description?: AnyRefProps['description'];
  inherits?: AnyRefProps['inherits'];
  methods?: AnyRefProps['methods'];
  properties?: AnyRefProps['properties'];
}

export interface PreparedInterfaceProps extends InterfaceProps {
  metaType: InterfaceType;
  methods?: PreparedMethodProps[];
}
