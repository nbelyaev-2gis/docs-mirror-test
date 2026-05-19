import { omitUndefined } from '@shared/log/lib/omitUndefined';
import { formatLog } from '../lib/formatLog';
import { AnyLogParams, cropLogValues, logQueue } from '@shared/logger';
import { ErrorLog } from '../types';

/**
 * Отправляет лог с клиента.
 *
 */
export function logErrorOnClient(
  params: Omit<ErrorLog, 'http_user_agent' | 'request_id' | 'request_uri' | 'environment'>,
) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  if (process.env.NODE_ENV === 'development') {
    console.log(omitUndefined(params));
  }

  logQueue.addToQueue(
    cropLogValues(
      omitUndefined({
        ...formatLog(params),
        environment: 'client',
      }) as AnyLogParams,
    ),
  );
}
