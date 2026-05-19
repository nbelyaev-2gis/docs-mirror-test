export type LogLevel = 'info' | 'warn' | 'error' | 'fatal';

interface Log {
  /** Где произошла ошибка. На клиенте или на сервере */
  environment: 'client' | 'server';

  /** Сообщение, по которому можно понять, что произошло. */
  message: string;

  /**
   * Уровень ошибки.
   *
   * Какой выбрать? @see {@link file://./README.md#type}
   */
  level: LogLevel;

  /**
   * Уникальный id ошибки из пяти символов: латинских букв нижнего регистра или цифр [a-z0-9]{5}.
   * Нужен, чтобы можно было искать по проекту, откуда эта ошибка бросается.
   * Для генерации просто упади лицом на клавиатуру.
   * Или возьми тут: https://www.random.org/strings/?num=50&len=5&digits=on&loweralpha=on&unique=on&format=plain&rnd=new
   */
  id: string;

  /**
   * Параметры ниже не нужно прокидывать, если код работает ТОЛЬКО на клиенте.
   * Эти параметры в таком случае подставляются автоматически.
   * А requestId не имеет смысла на клиенте.
   */

  /** user_agent пользователя. */
  http_user_agent?: string;

  /** url, на котором произошла ошибка */
  request_uri?: string;

  /** request_id запроса. */
  request_id?: string;

  /** настоящее ip юзера, а не нашего прокси */
  remote_addr?: string;
}

/**
 * Параметры логов ошибок.
 */
export interface ErrorLog extends Log {
  payload: {
    type: string;
    subtype?: string;
    stack?: string;
    data?: string;
    value?: number;
  };
}
