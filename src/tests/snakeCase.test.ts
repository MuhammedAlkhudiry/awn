import { describe, it, expect } from 'vitest';
import { snakeCase } from '../../registry/string/snakeCase.js';

describe('snakeCase', () => {
  it('should convert to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
    expect(snakeCase('HelloWorld')).toBe('hello_world');
    expect(snakeCase('hello-world')).toBe('hello_world');
    expect(snakeCase('hello world')).toBe('hello_world');
  });

  it('should handle empty strings', () => {
    expect(snakeCase('')).toBe('');
  });

  it('should handle single words', () => {
    expect(snakeCase('hello')).toBe('hello');
    expect(snakeCase('HELLO')).toBe('hello');
  });

  it('should handle numbers', () => {
    expect(snakeCase('hello123World')).toBe('hello123world');
  });
});
