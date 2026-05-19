export function omit<T, K extends keyof T>(object: T, fields: K[]): Omit<T, K> {
  return fields.reduce((a: any, b) => {
    const { [b]: omitted, ...result } = a;
    return result;
  }, object) as Omit<T, K>;
}
