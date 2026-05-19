import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/_/api/chat-bot', // Запросы ходят через проксю в nginx
});
