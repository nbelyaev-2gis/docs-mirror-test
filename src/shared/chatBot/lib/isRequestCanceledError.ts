import { isAxiosError } from 'axios';

export const isRequestCanceledError = (error: unknown) => {
  return isAxiosError(error) && error.code === 'ERR_CANCELED';
};
