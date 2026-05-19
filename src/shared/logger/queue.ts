import { request } from '../request';
import { groupByAndDeduplicate } from './lib/groupBy';
import { stringHash } from './lib/stringHash';
import { AnyLogParams } from './types';

export type QueueParams = AnyLogParams;

/**
 * Метод для отправки логов.
 */
function doRequest(log: QueueParams) {
  return request('/_/api/log', {
    method: 'POST',
    data: log,
    headers: {
      contentType: 'application/json',
    },
  });
}

/**
 * в дальнейшем всегда можно заложить алгоритм, который будет дедуплицировать по более сложным ключам.
 */
export function deduplicateQueue(queue: QueueParams[]): QueueParams[] {
  const groupedData = groupByAndDeduplicate<QueueParams>(queue, (item: QueueParams) => {
    if ('error.type' in item) {
      return stringHash(`${item['error.type']}_${item['message']}`);
    }

    return stringHash((item['id'] || '')?.toString());
  });

  // В логи отдаем еще и данные о количестве схлопнутых логов.
  return Object.values(groupedData).map((item) => {
    // Dirty Hack. В данной функции у нас возвращаются элементы QueueParams + поле count,
    // но при повторной дедупликации у нас в QueueParams уже есть count,
    // поэтому мы смотрим на значение данного поля и стараемся его не перетереть.
    // Hack в том, что нормально типами я описать это не смог,
    // ровно как произвести учет ранее схлопнутых элементов с новыми.
    const itemData = item.data as QueueParams & { count: number };
    return {
      ...itemData,
      // Тут сложный момент, когда считаем каунтер повторений,
      // при условии что ранее в сущности уже был каунтер мы плюсуем его с текущим, но исключаем схлопнутый из учета.
      // Пример:
      // [{ count: 10 }, {}, {}] - всего 3 объекта, но первый это группировка первых 10, что в сумме нам даст 12 итемов.
      // Данная же функция вернет нам count 3.
      // 10 + 3 - это 13, поэтому нам надо учесть сгруппированный элемент - это будет "-1"
      count: itemData.count > 1 ? item.count + itemData.count - 1 : item.count,
    };
  });
}

/**
 * Класс для реализации очереди отправки логов
 * Принимает метод для обработки элемента и задержку начала обработки.
 */
export class LogQueue {
  private queue: QueueParams[] = [];
  private deduplicateTimeout?: number;
  private sendLogAction: (_queue: QueueParams) => Promise<any>;
  private deduplicateQueue: (_queue: QueueParams[]) => QueueParams[];
  private inProgress = false;

  constructor(
    sendLogAction: (queue: QueueParams) => Promise<any>,
    deduplicateQueueAction: (queue: QueueParams[]) => QueueParams[],
    deduplicateTimeout?: number,
  ) {
    this.deduplicateTimeout = deduplicateTimeout || 0;
    this.sendLogAction = sendLogAction;
    this.deduplicateQueue = deduplicateQueueAction;
  }

  public addToQueue(itemParams: QueueParams) {
    this.queue.push(itemParams);
    this.queue = this.deduplicateQueue(this.queue);
    this.startQueue();
  }

  private startQueue() {
    this.sendNextLog();
  }

  private sendNextLog() {
    if (this.inProgress) {
      return;
    }

    this.inProgress = true;

    setTimeout(() => {
      this.sendLog();
    }, this.deduplicateTimeout);
  }

  private sendLog() {
    if (!this.queue.length) {
      this.inProgress = false;
      return;
    }

    const log = this.queue.shift() as AnyLogParams;

    this.sendLogAction(log)
      .then(() => {
        this.inProgress = false;
        this.sendNextLog();
      })
      .catch(() => {
        this.inProgress = false;

        this.addToQueue(log);

        this.addToQueue({
          environment: 'client',
          level: 'warn',
          message: 'Error during send log',
          'error.type': 'sendLogError',
        });
      });
  }
}

export const logQueue = new LogQueue(doRequest, deduplicateQueue, 1000);
