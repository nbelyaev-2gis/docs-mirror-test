import { AnyLogParams } from '../types';
import { mapValues } from './mapValues';

const STRING_FIELD_SIZE = 1000;

export function cropLogValues(params: AnyLogParams) {
  return mapValues(params, (v) =>
    typeof v === 'string' ? v.slice(0, STRING_FIELD_SIZE) : v,
  ) as AnyLogParams;
}
