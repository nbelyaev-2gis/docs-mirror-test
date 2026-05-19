/**
 * Выкидывает из объекта поля, значения которых равны undefined.
 * Отличается от removeEmptyAttrs тем, что не выкидывает null, не мутирует объект и возвращает тип без undefined.
 *
 * @example
 *
 * omitUndefined({ x: 1, y: undefined }) === { x: 1 }
 */
export function omitUndefined<T>(obj: { [i: string]: T | undefined }): { [i: string]: T } {
  const mutableResult: { [i: string]: T } = {};
  let omittedAnything = false;

  for (const key in obj) {
    const value = obj[key];
    if (value !== undefined) {
      mutableResult[key] = value;
    } else {
      omittedAnything = true;
    }
  }

  if (!omittedAnything) {
    // Если ничего не выкинули,
    // значит undefined в значениях не было
    // и смысла возвращать новый объект нет
    return obj as { [i: string]: T };
  }

  return mutableResult;
}
