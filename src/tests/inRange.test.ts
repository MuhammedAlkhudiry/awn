import { describe, it, expect } from 'vitest';
import { inRange } from '../../registry/number/inRange.js';

describe('inRange', () => {
  it('should check if number is in range', () => {
    expect(inRange(5, 1, 10)).toBe(true);
    expect(inRange(0, 1, 10)).toBe(false);
    expect(inRange(10, 1, 10)).toBe(false); // upper bound is exclusive
    expect(inRange(1, 1, 10)).toBe(true); // lower bound is inclusive
  });

  it('should use 0 as start when only one bound provided', () => {
    expect(inRange(5, 10)).toBe(true); // 0 to 10
    expect(inRange(-1, 10)).toBe(false);
    expect(inRange(10, 10)).toBe(false);
  });

  it('should handle swapped bounds', () => {
    expect(inRange(5, 10, 1)).toBe(true); // automatically swaps to 1, 10
    expect(inRange(0, 10, 1)).toBe(false);
  });

  it('should handle decimal numbers', () => {
    expect(inRange(1.5, 1.0, 2.0)).toBe(true);
    expect(inRange(2.0, 1.0, 2.0)).toBe(false);
  });
});
