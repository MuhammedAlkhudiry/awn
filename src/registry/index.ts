import fs from 'fs-extra';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { UtilityManifest } from '../types/manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface RegistryEntry extends UtilityManifest {
  content: string;
}

const REGISTRY_PATH = path.join(__dirname, '../../registry');

export async function getRegistryEntry(
  utilityName: string
): Promise<RegistryEntry | null> {
  try {
    const categories = ['array', 'string', 'number'];

    for (const category of categories) {
      const utilityFile = path.join(
        REGISTRY_PATH,
        category,
        `${utilityName}.ts`
      );

      if (await fs.pathExists(utilityFile)) {
        const content = await fs.readFile(utilityFile, 'utf-8');

        // Import the module dynamically to get the manifest
        const fileUrl = `file://${utilityFile}`;
        const module = await import(fileUrl);

        if (module.manifest) {
          return {
            ...module.manifest,
            content: content,
            category: category as 'array' | 'string' | 'number',
          };
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error reading registry entry: ${error}`);
    return null;
  }
}

export async function listUtilities(): Promise<RegistryEntry[]> {
  const utilities: RegistryEntry[] = [];
  const categories = ['array', 'string', 'number'];

  for (const category of categories) {
    const categoryPath = path.join(REGISTRY_PATH, category);

    if (await fs.pathExists(categoryPath)) {
      const files = await fs.readdir(categoryPath);
      const tsFiles = files.filter(file => file.endsWith('.ts'));

      for (const file of tsFiles) {
        const utilityName = path.basename(file, '.ts');
        const entry = await getRegistryEntry(utilityName);
        if (entry) {
          utilities.push(entry);
        }
      }
    }
  }

  return utilities;
}
