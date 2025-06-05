#!/usr/bin/env node

import { Command } from 'commander';
import { addUtility } from './commands/add.js';
import { searchUtilities } from './commands/search.js';
import { initConfig } from './commands/init.js';

const program = new Command();

program
  .name('awn')
  .description('عون (Awn) - A shadcn-style utility library for TypeScript')
  .version('0.0.1');

program
  .command('init')
  .description('Initialize utils.json configuration file')
  .action(initConfig);

program
  .command('add')
  .description('Add a utility function to your project')
  .argument('<utility>', 'Name of the utility to add')
  .option('-p, --path <path>', 'Override the configured utils path')
  .action(addUtility);

program
  .command('search')
  .description('Search for utilities with fuzzy matching')
  .argument('[query]', 'Search query (optional)')
  .action(searchUtilities);

program.parse();
