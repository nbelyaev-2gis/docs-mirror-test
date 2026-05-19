import {
  ClassProps,
  ClassType,
  PreparedClassProps,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/class';
import {
  EnumerationProps,
  EnumerationType,
  PreparedEnumerationProps,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/enumeration';
import {
  InterfaceProps,
  InterfaceType,
  PreparedInterfaceProps,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/interface';
import {
  MethodProps,
  PreparedMethodProps,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import {
  PreparedStructProps,
  StructProps,
  StructType,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/struct';
import {
  PreparedTypeAliasProps,
  TypeAliasProps,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/typeAlias';
import {
  ExtensionProps,
  ExtensionType,
  PreparedExtensionProps,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/extension';
import { serialize } from 'shared/utils/serialize';
import { RefLink } from './refLink';
import { getEveryObjectProp } from './getEveryObjectProp';

const basePropsHandler = <K extends ClassType | StructType>(
  props: ClassProps | StructProps,
  metaType: K,
) => {
  const baseProps = {
    ...props,
    metaType,
  };

  return serialize<K extends ClassType ? PreparedClassProps : PreparedStructProps>(baseProps);
};

const typesWithMethodsPropsHandler = <K extends ExtensionType | EnumerationType | InterfaceType>(
  props: ExtensionProps | EnumerationProps | InterfaceProps,
  metaType: K,
) => {
  const typesWithMethodsProps = {
    ...props,
    metaType,
  };

  return serialize<
    K extends ExtensionType
      ? PreparedExtensionProps
      : K extends EnumerationType
        ? PreparedEnumerationProps
        : PreparedInterfaceProps
  >(typesWithMethodsProps);
};

const typeAliasPropsHandler = (props: TypeAliasProps): PreparedTypeAliasProps => {
  return {
    ...props,
    metaType: 'typeAlias',
  };
};

const methodPropsHandler = (props: MethodProps) => {
  const methodProps = {
    ...props,
    metaType: 'method',
  };

  return serialize<PreparedMethodProps>(methodProps);
};

type PropsByMetaType = {
  class: ClassProps;
  struct: StructProps;
  enumeration: EnumerationProps;
  enum: EnumerationProps;
  interface: InterfaceProps;
  typeAlias: TypeAliasProps;
  extension: ExtensionProps;
  method: MethodProps;
};

type ReturnValueByMetaType = {
  class: PreparedClassProps;
  struct: PreparedStructProps;
  enumeration: PreparedEnumerationProps;
  enum: PreparedEnumerationProps;
  interface: PreparedInterfaceProps;
  typeAlias: PreparedTypeAliasProps;
  extension: PreparedExtensionProps;
  method: PreparedMethodProps;
};

const preparePropsHandlers: {
  [K in keyof PropsByMetaType]: (props: PropsByMetaType[K]) => ReturnValueByMetaType[K];
} = {
  class: (props: ClassProps) => basePropsHandler(props, 'class'),
  struct: (props: StructProps) => basePropsHandler(props, 'struct'),
  enumeration: (props: EnumerationProps) => typesWithMethodsPropsHandler(props, 'enumeration'),
  enum: (props: EnumerationProps) => typesWithMethodsPropsHandler(props, 'enumeration'),
  interface: (props: InterfaceProps) => typesWithMethodsPropsHandler(props, 'interface'),
  typeAlias: (props: TypeAliasProps) => typeAliasPropsHandler(props),
  extension: (props: ExtensionProps) => typesWithMethodsPropsHandler(props, 'extension'),
  method: (props: MethodProps) => methodPropsHandler(props),
};

export const prepareProps = <K extends keyof PropsByMetaType>(
  props: PropsByMetaType[K],
  metaType: K,
  { refLink }: { refLink: RefLink },
): { props: ReturnValueByMetaType[K] } => {
  if (!(metaType in preparePropsHandlers)) {
    throw new Error(`Unknown metaType: ${metaType} in ${props.name}`);
  }

  for (const prop of getEveryObjectProp(props)) {
    if (
      typeof prop.refLink === 'string' &&
      !prop.refLink.startsWith('http') &&
      !prop.refLink.startsWith('//')
    ) {
      // Присутствие в json ссылок — легаси. Конечные команды не должны определять, по какой ссылке находится реф.
      prop.refLink = refLink.getRefLink({
        // Используем `prop.refLink` вместо `prop.name`, потому что есть android,
        // где в name пишется название сущности, а в refLink — пакет, например, `ru.dgis.sdk.Context`.
        // В остальных рефах внутри refLink записана ссылка.
        refName: prop.refLink.split('/').pop(),
      });
    }
  }

  return {
    props: preparePropsHandlers[metaType](props),
  };
};
