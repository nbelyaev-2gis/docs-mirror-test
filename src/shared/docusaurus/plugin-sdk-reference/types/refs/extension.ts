import type { AnyRefProps } from './_anyRef';
import { PreparedMethodProps } from 'shared/docusaurus/plugin-sdk-reference/types/refs/method';

export type ExtensionType = 'extension';

export interface ExtensionRef {
  type: ExtensionType;
  props: ExtensionProps;
}

export interface ExtensionProps {
  name: AnyRefProps['name'];
  description?: AnyRefProps['description'];
  extendTypes: AnyRefProps['extendTypes'];
  methods?: AnyRefProps['methods'];
  properties?: AnyRefProps['properties'];
}

export interface PreparedExtensionProps extends ExtensionProps {
  metaType: ExtensionType;
  methods?: PreparedMethodProps[];
}
