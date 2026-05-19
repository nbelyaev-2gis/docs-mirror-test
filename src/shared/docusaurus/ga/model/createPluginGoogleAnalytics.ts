import type { PluginModule } from '@docusaurus/types';
import { pluginGoogleAnalytics } from '../pluginGoogleAnalytics';
import { PluginGAOptions } from '../types';

export function createPluginGoogleAnalytics(
  options: PluginGAOptions,
): [PluginModule<unknown>, PluginGAOptions] {
  const plugin: PluginModule<unknown> = pluginGoogleAnalytics;

  return [plugin, options];
}
