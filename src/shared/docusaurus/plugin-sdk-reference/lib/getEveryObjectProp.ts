export function* getEveryObjectProp(maybeObj: object): any {
  yield maybeObj;
  for (const value of Object.values(maybeObj)) {
    if (typeof value === 'object' && value !== null) {
      yield* getEveryObjectProp(value as any);
    }
  }
}
