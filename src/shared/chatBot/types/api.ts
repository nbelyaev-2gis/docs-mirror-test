export type ChatBotMessageAuthor = 'user' | 'assistant';

export type ChatBotMessageApi = {
  id: number;
  author: ChatBotMessageAuthor;
  /** Текст в формате Markdown */
  content: string;
  /**
   * ISO строка
   * @example 2025-11-28T12:36:28.579Z
   *
   * Пока убрал из типа, т.к. не используется
   */
  // timestamp: string;
};

export type CompletionsResponse = {
  message_id: number;
  content: string;
};

export type HistoryResponse = {
  messages: ChatBotMessageApi[];
};

export type ScoreFeedback = 'wrong_answer' | 'misunderstanding' | 'continuous_thinking';

export type ScorePayload = {
  score: 0 | 1;
  feedback?: ScoreFeedback[];
  comment?: string;
};

export type ScoreResponse = void;
