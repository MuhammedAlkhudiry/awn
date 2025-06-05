# Claude Guidelines for AWN Project

## Project Overview
AWN is a shadcn-style utility library for TypeScript that allows developers to copy utility functions directly into their projects instead of installing heavy dependencies.

## Architecture

### Directory Structure
```
/
├── src/
│   ├── cli.ts           # Main CLI entry point
│   ├── commands/        # CLI commands
│   │   └── add.ts       # Add utility command
│   ├── registry/        # Registry system
│   │   └── index.ts     # Registry utilities
│   └── tests/           # Test files
├── registry/            # Utility function registry
│   ├── array/           # Array utilities
│   ├── string/          # String utilities
│   └── number/          # Number utilities
└── dist/                # Built output
```

### Key Components

1. **CLI Tool** (`src/cli.ts`)
   - Main entry point using Commander.js
   - Handles `awn add <utility>` commands
   - Built as executable in `dist/cli.js`

2. **Registry System** (`src/registry/index.ts`)
   - Manages utility function metadata
   - Each utility has `.ts` (implementation) and `.json` (metadata) files
   - Supports categories: array, string, number

3. **Add Command** (`src/commands/add.ts`)
   - Copies utility files to user's project
   - Handles file creation and error reporting
   - Supports custom target paths

## Development Guidelines

### Adding New Utilities

1. **Create Implementation File**
   ```typescript
   // registry/category/utilityName.ts
   export function utilityName(...args): ReturnType {
     // Implementation
   }
   ```

2. **Create Metadata File**
   ```json
   // registry/category/utilityName.json
   {
     "name": "utilityName",
     "description": "Brief description",
     "dependencies": []
   }
   ```

3. **Add Tests**
   ```typescript
   // src/tests/category.test.ts
   import { utilityName } from '../../registry/category/utilityName.js';
   
   describe('utilityName', () => {
     it('should work correctly', () => {
       expect(utilityName()).toBe(expected);
     });
   });
   ```

### Code Standards

1. **TypeScript**
   - Strict mode enabled
   - Full type annotations required
   - No `any` types unless absolutely necessary

2. **Function Design**
   - Pure functions preferred
   - Immutable operations
   - Clear, descriptive names
   - Comprehensive JSDoc when needed

3. **Testing**
   - All utilities must have tests
   - Use Vitest for testing
   - Test edge cases and error conditions
   - Aim for high coverage

4. **File Organization**
   - One main utility per file
   - Related helper functions in same file
   - Clear exports
   - Consistent naming conventions

### CLI Development

1. **Commands**
   - Use Commander.js patterns
   - Provide helpful error messages
   - Support common options (--path, --help)
   - Chalk for colored output

2. **Registry Access**
   - Async file operations
   - Proper error handling
   - Category-based organization
   - JSON metadata validation

### Build & Release

1. **Scripts**
   - `npm run build` - TypeScript compilation
   - `npm test` - Run all tests
   - `npm run lint` - ESLint checking
   - `npm run typecheck` - Type checking only

2. **Distribution**
   - Built files in `dist/`
   - CLI executable at `dist/cli.js`
   - Registry files included in package

## Testing Strategy

1. **Unit Tests**
   - Test each utility function
   - Cover edge cases and errors
   - Async function testing where applicable

2. **Integration Tests**
   - CLI command functionality
   - Registry system operations
   - File system operations

3. **Type Tests**
   - TypeScript compilation
   - Type inference validation
   - Generic type behavior

## Common Patterns

### Utility Function Template
```typescript
export function utilityName<T>(
  input: T,
  options: UtilityOptions = {}
): ReturnType {
  // Validate inputs
  if (!input) {
    throw new Error('Invalid input');
  }
  
  // Apply defaults
  const { option1 = defaultValue } = options;
  
  // Implementation
  return result;
}
```

### Test Template
```typescript
describe('utilityName', () => {
  it('should handle normal case', () => {
    expect(utilityName(input)).toBe(expected);
  });
  
  it('should handle edge cases', () => {
    expect(utilityName(edgeInput)).toBe(edgeExpected);
  });
  
  it('should throw on invalid input', () => {
    expect(() => utilityName(invalid)).toThrow();
  });
});
```

## When Working on AWN

1. **Before Adding Features**
   - Check existing utilities for similar functionality
   - Consider if it fits the current category structure
   - Review TypeScript compatibility

2. **Code Quality**
   - Run tests before committing
   - Check TypeScript compilation
   - Validate ESLint rules
   - Test CLI functionality manually

3. **Documentation**
   - Update README.md for new utilities
   - Add JSDoc for complex functions
   - Update this CLAUDE.md for architectural changes

4. **Release Process**
   - Version bump in package.json
   - Update CHANGELOG if present
   - Test CLI installation locally
   - Verify registry files are included

## Dependencies

### Runtime
- `commander` - CLI framework
- `fs-extra` - Enhanced file operations
- `chalk` - Terminal colors

### Development
- `typescript` - Type checking and compilation
- `vitest` - Testing framework
- `eslint` - Code linting
- `@typescript-eslint/*` - TypeScript ESLint rules

Keep dependencies minimal to maintain the lightweight philosophy of the project.