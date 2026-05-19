import { Node } from 'estree-jsx';

type Options = {
  onSubstitute: (value: string) => string;
};

export type SubstitueFn<T extends Node = Node> = (node: T, options: Options) => void;
