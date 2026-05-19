/**
 * Возвращает объект с такими же ключами, а значения пропускает через функцию iter.
 *
 * @example
 * ```
 * mapValues({ x: 11, y: 35 }, (i) => item + 2);
 * // { x: 13, y: 37 }
 * ```
 */
type ObjectIterator<T, U> = (value: T[keyof T], key: string) => U;

export function mapValues<T extends { [id: string]: any }, U>(
  obj: T | undefined,
  iter: ObjectIterator<T, U>,
) {
  const mutableRes: Record<keyof T, U> = {} as any;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      mutableRes[key] = iter(obj[key], key);
    }
  }

  return mutableRes;
}
