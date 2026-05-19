import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { SidebarItemCategoryConfig } from '@docusaurus/plugin-content-docs/lib/sidebars/types.js';

interface SDKSidebarsConfig {
  [key: string]: SidebarItemCategoryConfig;
}

let config: SDKSidebarsConfig;

export function createSDKSidebar(name: string) {
  const configPath = join(
    process.cwd(),
    'node_modules',
    '.cache',
    'sdkSidebars',
    'sdkSidebars.json',
  );

  if (!existsSync(configPath)) {
    console.warn(
      `При обработке replaceId ${name} файл sdkSidebars.json не был найден по пути: ${configPath}`,
    );
    return [];
  }

  try {
    if (!config) {
      const configContent = readFileSync(configPath, 'utf-8');
      config = JSON.parse(configContent);
    }
    const sidebar = config[name];

    if (!sidebar) {
      console.warn(`replaceId ${name} не обнаружен в файле sdkSidebars.json`);
      return [];
    }

    return [sidebar];
  } catch (error) {
    console.warn(`Ошибка при чтении sdkSidebars.json для replaceId ${name}: ${error}`);
    return [];
  }
}
