import { describe, it, expect } from 'vitest';
import { sample } from '../../registry/array/sample.js';

describe('sample', () => {
  it('should return an element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  it('should return undefined for empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return the only element for single-element array', () => {
    expect(sample([42])).toBe(42);
  });

  it('should work with string arrays', () => {
    const array = ['a', 'b', 'c'];
    const result = sample(array);
    expect(array).toContain(result);
  });
});
