import { describe, it, expect } from 'vitest';
import { camelCase } from '../../registry/string/camelCase.js';

describe('camelCase', () => {
  it('should convert to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('Hello World')).toBe('helloWorld');
    expect(camelCase('HELLO_WORLD')).toBe('hELLOWORLD');
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  it('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
  });

  it('should handle single words', () => {
    expect(camelCase('hello')).toBe('hello');
    expect(camelCase('HELLO')).toBe('hELLO');
  });

  it('should handle numbers', () => {
    expect(camelCase('hello123world')).toBe('hello123world');
    expect(camelCase('hello 123 world')).toBe('hello123World');
  });
});
