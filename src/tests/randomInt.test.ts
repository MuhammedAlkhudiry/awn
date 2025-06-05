import { describe, it, expect } from 'vitest';
import { randomInt } from '../../registry/number/randomInt.js';

describe('randomInt', () => {
  it('should generate random integers in range', () => {
    for (let i = 0; i < 10; i++) {
      const result = randomInt(1, 5);
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(5);
    }
  });

  it('should include both bounds', () => {
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(randomInt(1, 3));
    }
    expect(results.has(1)).toBe(true);
    expect(results.has(3)).toBe(true);
  });

  it('should handle same min and max', () => {
    expect(randomInt(5, 5)).toBe(5);
  });

  it('should handle negative numbers', () => {
    for (let i = 0; i < 5; i++) {
      const result = randomInt(-5, -1);
      expect(result).toBeGreaterThanOrEqual(-5);
      expect(result).toBeLessThanOrEqual(-1);
    }
  });
});
