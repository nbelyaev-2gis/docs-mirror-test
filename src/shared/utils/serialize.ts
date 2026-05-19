export const serialize = <T>(value: unknown): T => JSON.parse(JSON.stringify(value));
