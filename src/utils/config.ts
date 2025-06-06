import fs from 'fs-extra';
import * as path from 'path';
import { defaultConfig, UtilsConfig } from '../types/config';

export async function getConfig(): Promise<UtilsConfig> {
  try {
    const configPath = path.join(process.cwd(), 'utils.json');

    if (await fs.pathExists(configPath)) {
      const configContent = await fs.readFile(configPath, 'utf-8');
      const config = JSON.parse(configContent) as UtilsConfig;

      // Merge with defaults to ensure all required fields exist
      return {
        ...defaultConfig,
        ...config,
        utils: {
          ...defaultConfig.utils,
          ...config.utils,
        },
        aliases: {
          ...defaultConfig.aliases,
          ...config.aliases,
        },
      };
    }

    return defaultConfig;
  } catch (error) {
    console.warn('Warning: Could not read utils.json, using defaults');
    return defaultConfig;
  }
}

export function getUtilsPath(config: UtilsConfig): string {
  return config.utils.path;
}
