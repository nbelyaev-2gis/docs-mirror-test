import { logError } from '@shared/log';

export function createHandleGlobalErrorFunc() {
  return (event: ErrorEvent) => {
    const { message, error } = event;
    logError({
      message,
      level: 'error',
      id: 'mdowc',
      payload: {
        type: 'WindowError',
        stack: error.stack,
      },
    });
  };
}
