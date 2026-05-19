import { Ref } from './refs/_anyRef';
import { MethodProps } from './refs/method';

export type RefPageDataProps = {
  refList: Array<{
    name: string;
    constructorMethods?: MethodProps[];
    description?: React.ReactNode;
    extendTypes?: Ref[];
    implement?: Ref[];
    inherits?: Ref[];
    methods?: MethodProps[];
    properties?: any[];
  }>;
  sdkVersion: string;
  pluginId: string;
  type: string;
};
