/** Мапа названия события к его параметрам */
export type GAEventsMap = {
  /** отправленный на сервер поисковый запрос */
  search_query_sent: {
    search_query_sent_query: string;
  };
  /** Событие при клике по результату в саггестере
   * Что было в поисковой строке, ссылка и разметка результата  */
  search_suggester_click: {
    search_suggester_click_query: string;
    search_suggester_click_url: string;
    search_suggester_click_highlight: string;
  };
  /** Событие при клике по элементу в списке истории поиска */
  search_history_click: {
    search_history_click_url: string;
    search_history_click_highlight: string;
  };
  /** Событие при клике по кнопке "В кабинет" */
  go_to_account_click: {
    isMobile: boolean;
  };

  /* -------------------------------- События LLM чатбота ------------------------------- */

  /** Нажатие на кнопку чатбота */
  chat_bot_fab_click: undefined;
  /** Нажатие на кнопку чатбота в модальном окне поиска */
  chat_bot_search_click: undefined;
  /** Закрытие окна чатбота */
  chat_bot_close_click: undefined;
  /** Отправка сообщения (за исключением быстрого вопроса) */
  chat_bot_send_message: undefined;
  /** Отправка сообщения через быстрый вопрос */
  chat_bot_send_message_quick_question: undefined;
  /** Увеличение окна */
  chat_bot_maximize_click: undefined;
  /** Уменьшение окна */
  chat_bot_minimize_click: undefined;
  /** Создание нового диалога */
  chat_bot_new_chat_click: undefined;
  /** Лайк сообщения */
  chat_bot_like_click: undefined;
  /** Дизлайк сообщения */
  chat_bot_dislike_click: undefined;
  /** Клик на причину дизлайка */
  chat_bot_dislike_reason_click: undefined;
  /** Отправка обратной связи по дизлайку */
  chat_bot_dislike_feedback_send_click: undefined;
  /** Копирование ответа бота */
  chat_bot_copy_answer_click: undefined;
  /** Клик на переход в Codepen */
  chat_bot_codepen_click: undefined;
  /** Клик на ссылку внутри документации в ответе бота */
  chat_bot_internal_link_click: undefined;
  /** Клик на внешнюю ссылку в ответе бота */
  chat_bot_external_link_click: undefined;
};
