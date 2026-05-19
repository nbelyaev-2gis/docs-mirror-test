import { logError } from '@shared/log';
import { isAxiosError } from 'axios';

export const logChatBotError = (error: unknown) => {
  let data: string | undefined;
  let stack: string | undefined;

  if (isAxiosError(error) && error.config) {
    data = JSON.stringify({
      url: error.config.url,
      method: error.config.method,
      status: error.response?.status,
      requestData: error.config.data,
      responseData: error.response?.data,
    });
    stack = error.stack;
  }

  logError({
    message: 'ChatBot API Error',
    level: 'error',
    id: 'ftc45',
    payload: {
      type: 'ChatBotApiError',
      stack: stack || (error as Error)?.stack,
      data,
    },
  });
};
