import fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import { defaultConfig, UtilsConfig } from '../types/config';

export async function initConfig(): Promise<void> {
  try {
    const configPath = path.join(process.cwd(), 'utils.json');

    if (await fs.pathExists(configPath)) {
      console.log(chalk.yellow('⚠️  utils.json already exists!'));
      return;
    }

    const config: UtilsConfig = {
      ...defaultConfig,
    };

    await fs.writeFile(configPath, JSON.stringify(config, null, 2));

    console.log(chalk.green('✅ Created utils.json'));
    console.log(
      chalk.blue('📝 You can now customize your utility configuration')
    );
    console.log(
      chalk.gray('   Edit the path and aliases to match your project structure')
    );
  } catch (error) {
    console.error(chalk.red(`❌ Error creating config: ${error}`));
    process.exit(1);
  }
}
