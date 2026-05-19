import type { TemplateLiteral } from 'estree';
import type { SubstitueFn } from './types';
import { isString } from '../isString';

export const substituteTemplateLiteral: SubstitueFn<TemplateLiteral> = (node, { onSubstitute }) => {
  for (const quasi of node.quasis) {
    if (!isString(quasi.value.raw)) {
      continue;
    }

    const originalValue = quasi.value.raw;
    const newValue = onSubstitute(originalValue);

    if (originalValue !== newValue) {
      quasi.value.raw = newValue;
      quasi.value.cooked = newValue;
    }
  }
};
