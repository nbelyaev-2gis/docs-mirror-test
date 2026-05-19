import type { TypedReferenceProps } from '../types/meta';
import { formatRefItemName } from './formatRefItemName';

export const getSortedRefList = (refList: TypedReferenceProps): TypedReferenceProps => {
  return refList.sort((a, b) => {
    const aName = formatRefItemName(a.name);
    const bName = formatRefItemName(b.name);
    return aName.localeCompare(bName, undefined, { numeric: true });
  });
};
