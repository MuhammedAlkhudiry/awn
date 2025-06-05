import { describe, it, expect } from 'vitest';
import { sampleSize } from '../../registry/array/sampleSize.js';

describe('sampleSize', () => {
  it('should return n random elements from array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sampleSize(array, 3);
    expect(result).toHaveLength(3);
    result.forEach(item => expect(array).toContain(item));
  });

  it('should return all elements if n >= array length', () => {
    const array = [1, 2, 3];
    const result = sampleSize(array, 5);
    expect(result).toEqual(array);
  });

  it('should return empty array if n <= 0', () => {
    expect(sampleSize([1, 2, 3], 0)).toEqual([]);
    expect(sampleSize([1, 2, 3], -1)).toEqual([]);
  });

  it('should not return duplicate elements', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sampleSize(array, 3);
    const unique = [...new Set(result)];
    expect(result).toHaveLength(unique.length);
  });
});
