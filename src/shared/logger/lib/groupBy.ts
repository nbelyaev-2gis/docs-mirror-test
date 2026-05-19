type Result<T> = { [i: string]: { data: T; count: number } };

/**
 * Функция дедуплицирует/группирует массив.
 * В ответе возвращает исходные элементы и счетчик их кол-ва повторений.
 * Ключ, по которому происходит дедупликация передается как callback.
 */
export function groupByAndDeduplicate<T>(arr: T[], getKey: (x: T) => number | string): Result<T> {
  return arr.reduce((mutableAcc: { [i: string]: { data: T; count: number } }, item) => {
    const deduplicateKey = getKey(item);
    if (typeof mutableAcc[deduplicateKey] !== 'undefined') {
      mutableAcc[deduplicateKey].count++;
      return mutableAcc;
    }
    mutableAcc[deduplicateKey] = {
      data: item,
      count: 1,
    };

    return mutableAcc;
  }, {});
}
