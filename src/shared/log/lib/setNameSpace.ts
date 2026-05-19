/**
 * Проставляет заданный префикс всем ключам объекта
 *
 * @example
 *
 * setNamespace({ type: 'one', stack: 'two'}, 'error')
 * // { 'error.type': 'one', 'error.stack': 'two' }
 */
export function setNamespace(params: { [i: string]: any }, namespace: string) {
  const keys = Object.keys(params);
  const mutableResult: { [i: string]: any } = {};

  for (const key of keys) {
    mutableResult[`${namespace}.${key}`] = params[key];
  }

  return mutableResult;
}
