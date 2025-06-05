import { describe, it, expect } from 'vitest';
import { clamp } from '../../registry/number/clamp.js';

describe('clamp', () => {
  it('should clamp numbers within bounds', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-5, 1, 10)).toBe(1);
    expect(clamp(15, 1, 10)).toBe(10);
  });

  it('should throw error for invalid bounds', () => {
    expect(() => clamp(5, 10, 1)).toThrow(
      'Lower bound cannot be greater than upper bound'
    );
  });

  it('should handle equal bounds', () => {
    expect(clamp(5, 3, 3)).toBe(3);
    expect(clamp(1, 3, 3)).toBe(3);
  });

  it('should handle decimal numbers', () => {
    expect(clamp(1.5, 1.2, 1.8)).toBe(1.5);
    expect(clamp(1.1, 1.2, 1.8)).toBe(1.2);
    expect(clamp(1.9, 1.2, 1.8)).toBe(1.8);
  });
});
