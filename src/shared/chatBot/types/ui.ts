import { ChatBotMessageApi } from './api';

export type ChatBotMessage = Omit<ChatBotMessageApi, 'id'> & {
  // В API число, но в коде, где мы генерируем ключи для реакта, строка
  id: number | string;
};
