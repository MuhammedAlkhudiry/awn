import { describe, it, expect } from 'vitest';
import { random } from '../../registry/number/random.js';

describe('random', () => {
  it('should generate random numbers in range', () => {
    for (let i = 0; i < 10; i++) {
      const result = random(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('should generate floating point numbers when requested', () => {
    for (let i = 0; i < 10; i++) {
      const result = random(1, 10, true);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it('should handle swapped bounds', () => {
    for (let i = 0; i < 5; i++) {
      const result = random(10, 1);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it('should use default range 0-1', () => {
    for (let i = 0; i < 5; i++) {
      const result = random();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});
