import { describe, it, expect } from 'vitest';
import { truncate } from '../../registry/string/truncate.js';

describe('truncate', () => {
  it('should truncate strings', () => {
    expect(truncate('hello world', { length: 5 })).toBe('he...');
    expect(truncate('hello world', { length: 8, omission: '---' })).toBe(
      'hello---'
    );
  });

  it('should not truncate strings shorter than length', () => {
    expect(truncate('hello', { length: 10 })).toBe('hello');
  });

  it('should use default options', () => {
    const longString = 'This is a very long string that should be truncated';
    const result = truncate(longString);
    expect(result).toHaveLength(30);
    expect(result.endsWith('...')).toBe(true);
  });

  it('should handle separator option', () => {
    const result = truncate('hello world test', { length: 10, separator: ' ' });
    expect(result).toBe('hello...');
  });
});
