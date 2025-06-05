import { describe, it, expect } from 'vitest';
import { uniq } from '../../registry/array/uniq.js';

describe('uniq', () => {
  it('should remove duplicates from array', () => {
    expect(uniq([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(uniq(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should handle empty arrays', () => {
    expect(uniq([])).toEqual([]);
  });

  it('should work with mixed types', () => {
    expect(uniq([1, '1', 1, '1'])).toEqual([1, '1']);
  });

  it('should preserve order of first occurrence', () => {
    expect(uniq([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });
});
