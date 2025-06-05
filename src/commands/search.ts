import Fuse from 'fuse.js';
import chalk from 'chalk';
import { listUtilities } from '../registry/index.js';

export async function searchUtilities(query?: string): Promise<void> {
  try {
    const utilities = await listUtilities();

    if (!query) {
      // Show all utilities grouped by category
      console.log(chalk.blue('📦 Available utilities:\n'));

      const categories = ['array', 'string', 'number'];

      for (const category of categories) {
        const categoryUtils = utilities.filter(
          util => util.category === category
        );
        if (categoryUtils.length > 0) {
          console.log(chalk.green(`${category.toUpperCase()} utilities:`));
          categoryUtils.forEach(util => {
            console.log(`  ${chalk.cyan(util.name)} - ${util.description}`);
            if (util.tags.length > 0) {
              console.log(
                `    ${chalk.gray('Tags:')} ${util.tags.map(tag => chalk.yellow(tag)).join(', ')}`
              );
            }
          });
          console.log();
        }
      }

      console.log(
        chalk.blue(`\n✨ Total: ${utilities.length} utilities available`)
      );
      console.log(
        chalk.gray(
          'Usage: npx awn search <query> to search or npx awn add <utility> to add'
        )
      );
      return;
    }

    // Fuzzy search
    const fuse = new Fuse(utilities, {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'description', weight: 0.3 },
        { name: 'tags', weight: 0.3 },
      ],
      threshold: 0.4,
      includeScore: true,
    });

    const results = fuse.search(query);

    if (results.length === 0) {
      console.log(chalk.red(`❌ No utilities found matching "${query}"`));
      console.log(
        chalk.gray(
          'Try a different search term or use "npx awn search" to see all utilities'
        )
      );
      return;
    }

    console.log(chalk.blue(`🔍 Search results for "${query}":\n`));

    results.forEach(({ item, score }) => {
      const relevanceScore = Math.round((1 - (score || 0)) * 100);
      console.log(
        `${chalk.cyan(item.name)} ${chalk.gray(`(${relevanceScore}% match)`)}`
      );
      console.log(`  ${chalk.green('Category:')} ${item.category}`);
      console.log(`  ${chalk.green('Description:')} ${item.description}`);
      if (item.tags.length > 0) {
        console.log(
          `  ${chalk.green('Tags:')} ${item.tags.map(tag => chalk.yellow(tag)).join(', ')}`
        );
      }
      if (item.examples && item.examples.length > 0) {
        console.log(
          `  ${chalk.green('Example:')} ${chalk.gray(item.examples[0])}`
        );
      }
      console.log(`  ${chalk.blue('Add:')} npx awn add ${item.name}\n`);
    });
  } catch (error) {
    console.error(chalk.red(`❌ Error searching utilities: ${error}`));
    process.exit(1);
  }
}
