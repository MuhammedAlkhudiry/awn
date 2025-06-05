# عون (AWN)

> A shadcn-style utility library for TypeScript - copy utilities into your project

**عون** (AWN, meaning "help" in Arabic) is a collection of TypeScript utility functions that you can copy directly into your project, inspired by the shadcn/ui approach. Instead of installing a heavy dependency, you get clean, typed utility functions that live in your codebase.

## Installation

```bash
npm install -g awn
```

## Usage

### Add utilities to your project:

```bash
# Add a utility function to your utils folder
npx awn add debounce

# Specify a custom path
npx awn add chunk --path ./src/lib/utils
```

### Search for utilities:

```bash
# List all available utilities
npx awn search

# Search with fuzzy matching
npx awn search array
npx awn search case
npx awn search random
```

## Available Utilities

### Array Utilities (7 utilities)
- `chunk` - Split array into chunks of specified size
- `uniq` - Remove duplicates from array
- `uniqBy` - Remove duplicates using iteratee function
- `flatten` - Flatten array one level deep
- `flattenDeep` - Recursively flatten array
- `sample` - Get random element from array
- `sampleSize` - Get n random elements from array

### String Utilities (9 utilities)
- `camelCase` - Convert to camelCase format
- `pascalCase` - Convert to PascalCase format  
- `kebabCase` - Convert to kebab-case format
- `snakeCase` - Convert to snake_case format
- `debounce` - Create debounced function
- `throttle` - Create throttled function
- `truncate` - Truncate string with options
- `capitalize` - Capitalize first character
- `startCase` - Convert to Start Case (Title Case)

### Number Utilities (8 utilities)
- `clamp` - Clamp number within bounds
- `inRange` - Check if number is in range
- `random` - Generate random numbers with options
- `randomInt` - Generate random integers
- `round` - Round number to precision
- `ceil` - Ceil number to precision
- `floor` - Floor number to precision
- `percentage` - Calculate percentage with precision

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Format code
npm run format

# Lint
npm run lint

# Type check
npm run typecheck
```

### Release Process

This project uses [Changesets](https://github.com/changesets/changesets) for version management:

```bash
# Add a changeset (describes your changes)
npm run changeset

# Version packages (consumes changesets and updates versions)
npm run version

# Publish to NPM (builds and publishes)
npm run release
```

The GitHub Actions workflow will automatically:
1. Create release PRs when changesets are added
2. Publish to NPM when release PRs are merged

## How it works

AWN maintains a registry of utility functions with embedded manifests. When you run `npx awn add <utility>`, it copies only the function code (without metadata) directly into your project. This means:

- ✅ No runtime dependencies
- ✅ Full TypeScript support with strict typing
- ✅ You own the code
- ✅ Easy to customize
- ✅ Tree-shakeable by default
- ✅ Fuzzy search to discover utilities
- ✅ Each utility in its own file

## Features

- **24 utilities** across 3 categories (Array, String, Number)
- **Individual test files** for each utility (95 tests total)
- **Fuzzy search** with `npx awn search`
- **Embedded manifests** with examples and tags
- **Prettier formatting** and ESLint rules
- **GitHub Actions** CI/CD pipeline
- **TypeScript strict mode** with comprehensive types

## Examples

```typescript
// After running: npx awn add chunk
import { chunk } from './utils/chunk';

chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

```typescript
// After running: npx awn add debounce  
import { debounce } from './utils/debounce';

const debouncedFn = debounce(fn, 300);
```

```typescript
// After running: npx awn add clamp
import { clamp } from './utils/clamp';

clamp(5, 1, 10); // 5
clamp(-5, 1, 10); // 1
```

## License

MIT