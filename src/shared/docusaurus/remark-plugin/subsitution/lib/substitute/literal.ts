import type { Literal } from 'estree';
import type { SubstitueFn } from './types';
import { isString } from '../isString';

export const substituteLiteral: SubstitueFn<Literal> = (node, { onSubstitute }) => {
  const originalValue = node.value;

  if (!isString(originalValue)) {
    return;
  }

  const newValue = onSubstitute(originalValue);

  if (originalValue !== newValue) {
    node.value = newValue;

    if ('raw' in node) {
      node.raw = newValue;
    }
  }
};
