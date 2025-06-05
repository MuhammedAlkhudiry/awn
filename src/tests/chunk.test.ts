import { describe, it, expect } from 'vitest';
import { chunk } from '../../registry/array/chunk.js';

describe('chunk', () => {
  it('should split array into chunks of specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  it('should handle empty arrays', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should handle chunks larger than array', () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });

  it('should throw error for invalid chunk size', () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow(
      'Chunk size must be greater than 0'
    );
    expect(() => chunk([1, 2, 3], -1)).toThrow(
      'Chunk size must be greater than 0'
    );
  });
});
