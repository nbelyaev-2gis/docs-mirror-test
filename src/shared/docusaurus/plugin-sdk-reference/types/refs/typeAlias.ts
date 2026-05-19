import { PreparedMethodProps } from 'shared/docusaurus/plugin-sdk-reference/types/refs/method';

export type TypeAliasType = 'typeAlias';

export interface TypeAliasRef {
  type: TypeAliasType;
  props: TypeAliasProps;
}

export interface Alias {
  name: string;
  description?: string;
}

export interface TypeAliasProps {
  name: string;
  aliases: Alias[];
  description?: string;
}

export interface PreparedTypeAliasProps extends TypeAliasProps {
  metaType: TypeAliasType;
  methods?: PreparedMethodProps[];
}
