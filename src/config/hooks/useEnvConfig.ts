import { useCustomFields } from './useCustomFields';

export const useEnvConfig = () => {
  const { envConfig } = useCustomFields();

  return envConfig;
};
