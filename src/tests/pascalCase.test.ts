import { describe, it, expect } from 'vitest';
import { pascalCase } from '../../registry/string/pascalCase.js';

describe('pascalCase', () => {
  it('should convert to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
    expect(pascalCase('hello-world')).toBe('HelloWorld');
    expect(pascalCase('hello_world')).toBe('HelloWorld');
  });

  it('should handle empty strings', () => {
    expect(pascalCase('')).toBe('');
  });

  it('should handle single words', () => {
    expect(pascalCase('hello')).toBe('Hello');
    expect(pascalCase('HELLO')).toBe('HELLO');
  });

  it('should handle numbers', () => {
    expect(pascalCase('hello123world')).toBe('Hello123world');
    expect(pascalCase('hello 123 world')).toBe('Hello123World');
  });
});
