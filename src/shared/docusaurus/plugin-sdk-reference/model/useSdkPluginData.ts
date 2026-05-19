import { usePluginData } from '@docusaurus/useGlobalData';
import { pluginName } from './constants';
import { SdkGlobalData } from '../types/plugin';

export const useSdkPluginData = (pluginId: string) => {
  return usePluginData(pluginName, pluginId) as SdkGlobalData;
};
