import { describe, it, expect } from 'vitest';
import { kebabCase } from '../../registry/string/kebabCase.js';

describe('kebabCase', () => {
  it('should convert to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
    expect(kebabCase('HelloWorld')).toBe('hello-world');
    expect(kebabCase('hello_world')).toBe('hello-world');
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  it('should handle empty strings', () => {
    expect(kebabCase('')).toBe('');
  });

  it('should handle single words', () => {
    expect(kebabCase('hello')).toBe('hello');
    expect(kebabCase('HELLO')).toBe('hello');
  });

  it('should handle numbers', () => {
    expect(kebabCase('hello123World')).toBe('hello123world');
  });
});
