import type { LogLevel } from '@shared/log';

export type AnyLogParams = {
  level: LogLevel;
} & { [key: string]: string | number | undefined };
