import { describe, it, expect } from 'vitest';
import { floor } from '../../registry/number/floor.js';

describe('floor', () => {
  it('should floor numbers with precision', () => {
    expect(floor(1.2345, 2)).toBe(1.23);
    expect(floor(1.2345)).toBe(1);
  });

  it('should handle negative numbers', () => {
    expect(floor(-1.2345, 2)).toBe(-1.24);
    expect(floor(-1.2)).toBe(-2);
  });

  it('should handle zero precision', () => {
    expect(floor(1.9, 0)).toBe(1);
    expect(floor(1.0, 0)).toBe(1);
  });

  it('should handle negative precision', () => {
    expect(floor(1234, -2)).toBe(1200);
    expect(floor(1567, -2)).toBe(1500);
  });
});
