import { DistributionMode } from '../distributionMode/types';
import { Locale } from '../i18n';

type I18nOpenapiUrl = Record<Locale, string>;

export type OpenapiUrl = string | I18nOpenapiUrl | Record<DistributionMode, I18nOpenapiUrl>;
