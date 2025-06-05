import fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import { getRegistryEntry } from '../registry/index.js';

interface AddOptions {
  path: string;
}

function extractFunctionContent(content: string): string {
  // Remove the manifest export and clean up the content
  const lines = content.split('\n');
  const functionLines: string[] = [];
  let inManifest = false;

  for (const line of lines) {
    if (line.startsWith('export const manifest')) {
      inManifest = true;
      continue;
    }

    if (inManifest && line.includes('};')) {
      inManifest = false;
      continue;
    }

    if (!inManifest && line.trim() !== '') {
      functionLines.push(line);
    }
  }

  return functionLines.join('\n').trim() + '\n';
}

export async function addUtility(
  utilityName: string,
  options: AddOptions
): Promise<void> {
  try {
    const registryEntry = await getRegistryEntry(utilityName);

    if (!registryEntry) {
      console.error(
        chalk.red(`❌ Utility "${utilityName}" not found in registry`)
      );
      process.exit(1);
    }

    const targetDir = options.path;
    const targetFile = path.join(targetDir, `${utilityName}.ts`);

    await fs.ensureDir(targetDir);

    if (await fs.pathExists(targetFile)) {
      console.log(
        chalk.yellow(`⚠️  File ${targetFile} already exists. Overwriting...`)
      );
    }

    // Extract only the function content, not the manifest
    const cleanContent = extractFunctionContent(registryEntry.content);
    await fs.writeFile(targetFile, cleanContent);

    console.log(
      chalk.green(`✅ Successfully added ${utilityName}.ts to ${targetDir}`)
    );

    if (registryEntry.dependencies && registryEntry.dependencies.length > 0) {
      console.log(
        chalk.blue(`📦 Dependencies: ${registryEntry.dependencies.join(', ')}`)
      );
    }
  } catch (error) {
    console.error(chalk.red(`❌ Error adding utility: ${error}`));
    process.exit(1);
  }
}
