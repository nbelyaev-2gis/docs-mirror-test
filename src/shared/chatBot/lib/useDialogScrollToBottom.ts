import { useEffect, useCallback, RefObject, useRef } from 'react';
import { ChatBotMessage } from '../types/ui';
import { ChatBotStatus } from '../model/store/chatBotStatus';

type Params = {
  ref: RefObject<HTMLDivElement | null>;
  messages: ChatBotMessage[];
  feedbackFormMessageId: number | undefined;
  status: ChatBotStatus;
};

/**
 * Максимальный порог отступа от нижнего края контейнера,
 * при котором решаем, что при получении нового сообщения от бота нужно выполнить скролл вниз
 */
const SCROLL_THRESHOLD = 100;

/**
 * Скроллит контейнер диалога в следующих случаях:
 *
 * - произошла первичная загрузка истории сообщений
 * - пользователь получил новое сообщение от бота и находился около низа окна диалога
 * - пользователь отправил сообщение
 * - открыта форма обратной связи для последнего сообщения
 * - произошла ошибка отправки сообщения
 */
export const useDialogScrollToBottom = ({
  ref,
  messages,
  feedbackFormMessageId,
  status,
}: Params) => {
  const lastMessage = messages[messages.length - 1];

  const scrollPositionRef = useRef(0);

  // Следим за положением скролла в контейнере диалога
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      scrollPositionRef.current = target.scrollHeight - target.scrollTop - target.clientHeight;
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [ref]);

  const scrollToBottom = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [ref]);

  // Отправка сообщения пользователем
  useEffect(() => {
    if (!lastMessage || lastMessage.author === 'assistant') return;
    scrollToBottom();
  }, [lastMessage, scrollToBottom]);

  // Первичная загрузка истории или новое сообщение от бота
  useEffect(() => {
    if (!lastMessage || lastMessage.author === 'user') return;

    if (scrollPositionRef.current <= SCROLL_THRESHOLD) {
      scrollToBottom();
    }
  }, [lastMessage, scrollToBottom]);

  // Открытие формы обратной связи
  useEffect(() => {
    if (lastMessage?.id !== feedbackFormMessageId) return;
    scrollToBottom();
    // Реагируем только на открытие формы
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedbackFormMessageId]);

  // Ошибка отправки сообщения
  useEffect(() => {
    if (status.value !== 'sendError') return;
    scrollToBottom();
  }, [status.value, scrollToBottom]);
};
