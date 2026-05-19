import { logError } from '@shared/log';

export function createHandleRejectionFunc() {
  return (event: PromiseRejectionEvent) => {
    const { reason } = event;
    const message = typeof reason === 'string' ? reason : reason?.message;
    logError({
      message,
      level: 'error',
      id: 'dfgec',
      payload: {
        type: 'UnhandledRejection',
        stack: reason?.stack,
      },
    });
  };
}
