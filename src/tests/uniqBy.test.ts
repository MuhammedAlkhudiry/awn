import { describe, it, expect } from 'vitest';
import { uniqBy } from '../../registry/array/uniqBy.js';

describe('uniqBy', () => {
  it('should work with objects and key function', () => {
    const objects = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
    ];
    expect(uniqBy(objects, item => item.id)).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]);
  });

  it('should work with strings and length function', () => {
    expect(uniqBy(['a', 'bb', 'ccc', 'dd'], item => item.length)).toEqual([
      'a',
      'bb',
      'ccc',
    ]);
  });

  it('should handle empty arrays', () => {
    expect(uniqBy([], item => item)).toEqual([]);
  });

  it('should preserve order of first occurrence', () => {
    const numbers = [1, 2, 3, 1, 2];
    expect(uniqBy(numbers, n => n % 2)).toEqual([1, 2]);
  });
});
