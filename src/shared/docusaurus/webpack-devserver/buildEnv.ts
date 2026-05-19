import { DotenvParseOutput, config } from 'dotenv';
import { z } from 'zod/v4';

config();

const getEnv = () => {
  const { parsed: localEnv } = config({ path: './.env.local' });

  let devEnv: DotenvParseOutput | undefined;

  if (process.env.NODE_ENV === 'development') {
    const { parsed } = config({ path: './.env.development' });
    devEnv = parsed;
  }

  return { ...process.env, ...devEnv, ...localEnv };
};

const schema = z.object({
  SEARCH_API_URL: z.url(),
  SEARCH_API_COLLECTION: z.string(),
  APIKEY_DOCS_SEARCH: z.string(),

  CHAT_BOT_API_URL: z.url(),
});

export type EnvConfig = z.infer<typeof schema>;

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
