import { describe, it, expect } from 'vitest';
import { ceil } from '../../registry/number/ceil.js';

describe('ceil', () => {
  it('should ceil numbers with precision', () => {
    expect(ceil(1.2345, 2)).toBe(1.24);
    expect(ceil(1.2345)).toBe(2);
  });

  it('should handle negative numbers', () => {
    expect(ceil(-1.2345, 2)).toBe(-1.23);
    expect(ceil(-1.7)).toBe(-1);
  });

  it('should handle zero precision', () => {
    expect(ceil(1.1, 0)).toBe(2);
    expect(ceil(1.0, 0)).toBe(1);
  });

  it('should handle negative precision', () => {
    expect(ceil(1234, -2)).toBe(1300);
    expect(ceil(1567, -2)).toBe(1600);
  });
});
