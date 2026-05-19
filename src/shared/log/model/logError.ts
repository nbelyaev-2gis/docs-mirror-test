import { ErrorLog } from '../types';
import { logErrorOnClient } from './client';

export const logError = (params: Omit<ErrorLog, 'environment'>) => {
  return logErrorOnClient(params);
};
