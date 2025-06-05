import { describe, it, expect } from 'vitest';
import { startCase } from '../../registry/string/startCase.js';

describe('startCase', () => {
  it('should convert to start case', () => {
    expect(startCase('hello_world')).toBe('Hello World');
    expect(startCase('hello-world')).toBe('Hello World');
    expect(startCase('helloWorld')).toBe('Hello World');
  });

  it('should handle empty strings', () => {
    expect(startCase('')).toBe('');
  });

  it('should handle single words', () => {
    expect(startCase('hello')).toBe('Hello');
    expect(startCase('HELLO')).toBe('Hello');
  });

  it('should handle numbers', () => {
    expect(startCase('hello123world')).toBe('Hello123world');
    expect(startCase('hello_123_world')).toBe('Hello 123 World');
  });
});
