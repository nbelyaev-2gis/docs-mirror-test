import { z } from 'zod/v4';

/** Толкуем пустую строку как отсутствие значения */
const optionalEmptyString = z.preprocess(
  (v) => (v === '' ? undefined : v),
  z.string().min(1).optional(),
);

export const schema = z.object({
  APP_URL: z.url(),
  BRAND: z.enum(['2gis', 'urbi']),
  DISTRIBUTION_MODE: z.enum(['public', 'private']),
  APIKEY_MAPGL: z.string(),
  APIKEY_MAPGL_JSFIDDLE: z.string(),
  APIKEY_PLACES: z.string(),
  APIKEY_NAVIGATION: z.string(),
  GA_TRACKING_ID: optionalEmptyString,
  UX_FEEDBACK_ID: optionalEmptyString,
});

export type EnvConfig = z.infer<typeof schema>;
