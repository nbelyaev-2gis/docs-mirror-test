import type { PluginModule } from '@docusaurus/types';
import { pluginUxFeedback } from '../pluginUxFeedback';
import { PluginUxFeedbackOptions } from '../types';

export function createPluginUxFeedback(
  options: PluginUxFeedbackOptions,
): [PluginModule<unknown>, PluginUxFeedbackOptions] {
  const plugin: PluginModule<unknown> = pluginUxFeedback;

  return [plugin, options];
}
