type Args = [
  // command
  'event',
  // eventName
  string,
  // eventParams
  Record<string, unknown> | undefined,
];

// очередь, где будем хранить события, которые мы пытались трекнуть до инициализации gtag
let mutableQueue: Array<Args> = [];

/** Позволяет использовать очередь для событий аналитики */
export const gtag = (
  ...args: [
    // command
    'event',
    // eventName
    string,
    Record<string, unknown> | undefined,
  ]
) => {
  const gtagFunc = window.gtag;

  if (!gtagFunc) {
    // если сразу отправить не получилось — запишем событие в очередь
    mutableQueue.push(args);
    return;
  }

  if (mutableQueue.length) {
    // если у нас остались в очереди другие события, то пройдёмся по ним и отправим
    mutableQueue.forEach((item) => gtagFunc(...item));
    // после чего очистим очередь
    mutableQueue = [];
  }

  gtagFunc(...args);
};
