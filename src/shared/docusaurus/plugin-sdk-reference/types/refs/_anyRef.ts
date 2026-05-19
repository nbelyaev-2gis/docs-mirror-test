import { MethodProps, MethodType } from './method';
import { ClassType } from 'shared/docusaurus/plugin-sdk-reference/types/refs/class';
import { EnumerationType } from 'shared/docusaurus/plugin-sdk-reference/types/refs/enumeration';
import { ExtensionType } from 'shared/docusaurus/plugin-sdk-reference/types/refs/extension';
import { InterfaceType } from 'shared/docusaurus/plugin-sdk-reference/types/refs/interface';
import { StructType } from 'shared/docusaurus/plugin-sdk-reference/types/refs/struct';
import { TypeAliasType } from 'shared/docusaurus/plugin-sdk-reference/types/refs/typeAlias';

export type RefTypes =
  | ClassType
  | EnumerationType
  | ExtensionType
  | InterfaceType
  | MethodType
  | StructType
  | TypeAliasType;

export interface AnyRefProps {
  name: string;
  constructorMethods?: MethodProps[];
  description?: string;
  extendTypes?: Ref[];
  implement?: Ref[];
  inherits?: Ref[];
  methods?: MethodProps[];
  properties?: PropertyProps[];
  members?: MembersProps[];
}

export interface PropertyProps {
  name: string;
  types: Ref[] | '';
  description?: string;
  isOptional?: boolean;
}

export interface MembersProps {
  name: string;
  defaultValue?: string;
}

export interface Ref {
  name: string;
  refLink?: string;
}
