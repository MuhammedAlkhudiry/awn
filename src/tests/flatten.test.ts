import { describe, it, expect } from 'vitest';
import { flatten } from '../../registry/array/flatten.js';

describe('flatten', () => {
  it('should flatten array one level deep', () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    expect(flatten(['a', ['b', 'c'], 'd'])).toEqual(['a', 'b', 'c', 'd']);
  });

  it('should handle empty arrays', () => {
    expect(flatten([])).toEqual([]);
    expect(flatten([[], []])).toEqual([]);
  });

  it('should not flatten deeply nested arrays', () => {
    expect(flatten([1, [2, [3, 4]]])).toEqual([1, 2, [3, 4]]);
  });

  it('should handle mixed content', () => {
    expect(flatten([1, [2, 3], 'hello', [4]])).toEqual([1, 2, 3, 'hello', 4]);
  });
});
