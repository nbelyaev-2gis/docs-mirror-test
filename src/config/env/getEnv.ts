import { DotenvParseOutput, config } from 'dotenv';

config();

export const getEnv = () => {
  const { parsed: localEnv } = config({ path: './.env.local' });

  let devEnv: DotenvParseOutput | undefined;

  if (process.env.NODE_ENV === 'development') {
    const { parsed } = config({ path: './.env.development' });
    devEnv = parsed;
  }

  return { ...process.env, ...devEnv, ...localEnv };
};
