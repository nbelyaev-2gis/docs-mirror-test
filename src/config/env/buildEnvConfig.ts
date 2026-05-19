import { z } from 'zod/v4';
import { getEnv } from './getEnv';
import { schema } from './schema';

export const buildEnvConfig = () => {
  const env = getEnv();
  const { data, error } = schema.safeParse(env);

  if (error) {
    const prettifiedError = z.prettifyError(error);
    console.error(prettifiedError);
    process.exit(1);
  }

  return data;
};
