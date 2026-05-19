type Status<S extends StatusType, T = undefined> = T extends undefined
  ? {
      value: S;
    }
  : { value: S; payload: T };

type StatusType =
  | 'idle'
  | 'fetchingHistory'
  | 'waitingForResponse'
  | 'sendError'
  | 'fetchHistoryError'
  | 'feedbackFormOpen';

export type ChatBotStatus =
  | Status<'idle'>
  | Status<'fetchingHistory'>
  | Status<'waitingForResponse'>
  | Status<'sendError', { text: string }>
  | Status<'fetchHistoryError'>
  | Status<'feedbackFormOpen', { messageId: number }>;
