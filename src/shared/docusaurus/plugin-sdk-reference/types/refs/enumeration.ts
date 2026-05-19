import type { AnyRefProps } from './_anyRef';
import { PreparedMethodProps } from 'shared/docusaurus/plugin-sdk-reference/types/refs/method';

export type EnumerationType = 'enumeration';

export interface EnumerationRef {
  type: EnumerationType;
  props: EnumerationProps;
}

export interface EnumerationProps {
  name: AnyRefProps['name'];
  description?: AnyRefProps['description'];
  implement?: AnyRefProps['implement'];
  methods?: AnyRefProps['methods'];
  properties: NonNullable<AnyRefProps['properties']>;
  members?: AnyRefProps['members'];
}

export interface PreparedEnumerationProps extends EnumerationProps {
  metaType: EnumerationType;
  methods?: PreparedMethodProps[];
}
