import { omit } from './omit';
import { ErrorLog } from '../types';
import { setNamespace } from './setNameSpace';

/**
 * Форматирует объект лога.
 */
export function formatLog(params: Partial<ErrorLog>) {
  return {
    // Заменяем id на log_id, чтобы не было пересечений имён в кибане.
    ...omit(params, ['payload', 'id']),
    log_id: params.id,
    ...setNamespace(params.payload || {}, 'error'), // error.stack и т.п.
  };
}
