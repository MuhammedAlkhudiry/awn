import { describe, it, expect } from 'vitest';
import { flattenDeep } from '../../registry/array/flattenDeep.js';

describe('flattenDeep', () => {
  it('should recursively flatten with flattenDeep', () => {
    expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
    expect(flattenDeep(['a', ['b', ['c', 'd']]])).toEqual(['a', 'b', 'c', 'd']);
  });

  it('should handle empty arrays', () => {
    expect(flattenDeep([])).toEqual([]);
    expect(flattenDeep([[], [[]]])).toEqual([]);
  });

  it('should handle single level arrays', () => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle mixed types', () => {
    expect(flattenDeep([1, ['hello', [true, [null]]]])).toEqual([
      1,
      'hello',
      true,
      null,
    ]);
  });
});
