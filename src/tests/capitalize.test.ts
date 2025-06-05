import { describe, it, expect } from 'vitest';
import { capitalize } from '../../registry/string/capitalize.js';

describe('capitalize', () => {
  it('should capitalize strings', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('HELLO')).toBe('Hello');
    expect(capitalize('hELLO')).toBe('Hello');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle single character', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('A')).toBe('A');
  });

  it('should handle strings with numbers', () => {
    expect(capitalize('123hello')).toBe('123hello');
    expect(capitalize('hello123')).toBe('Hello123');
  });
});
