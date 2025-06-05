---
"awn": major
---

Initial release of عون (AWN) - A shadcn-style utility library for TypeScript

## Features

- **24 utilities** across 3 categories (Array, String, Number)
- **Individual test files** for each utility (95 tests total)
- **Fuzzy search** with `npx awn search`
- **Embedded manifests** with examples and tags
- **Prettier formatting** and ESLint rules
- **GitHub Actions** CI/CD pipeline
- **TypeScript strict mode** with comprehensive types

## Available Utilities

### Array Utilities (7)
- `chunk` - Split array into chunks of specified size
- `uniq` - Remove duplicates from array
- `uniqBy` - Remove duplicates using iteratee function
- `flatten` - Flatten array one level deep
- `flattenDeep` - Recursively flatten array
- `sample` - Get random element from array
- `sampleSize` - Get n random elements from array

### String Utilities (9)
- `camelCase` - Convert to camelCase format
- `pascalCase` - Convert to PascalCase format  
- `kebabCase` - Convert to kebab-case format
- `snakeCase` - Convert to snake_case format
- `debounce` - Create debounced function
- `throttle` - Create throttled function
- `truncate` - Truncate string with options
- `capitalize` - Capitalize first character
- `startCase` - Convert to Start Case (Title Case)

### Number Utilities (8)
- `clamp` - Clamp number within bounds
- `inRange` - Check if number is in range
- `random` - Generate random numbers with options
- `randomInt` - Generate random integers
- `round` - Round number to precision
- `ceil` - Ceil number to precision
- `floor` - Floor number to precision
- `percentage` - Calculate percentage with precision