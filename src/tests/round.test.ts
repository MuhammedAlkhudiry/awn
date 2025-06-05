import { describe, it, expect } from 'vitest';
import { round } from '../../registry/number/round.js';

describe('round', () => {
  it('should round numbers with precision', () => {
    expect(round(1.2345, 2)).toBe(1.23);
    expect(round(1.2365, 2)).toBe(1.24);
    expect(round(1.2345)).toBe(1);
  });

  it('should handle negative numbers', () => {
    expect(round(-1.2345, 2)).toBe(-1.23);
    expect(round(-1.2365, 2)).toBe(-1.24);
  });

  it('should handle zero precision', () => {
    expect(round(1.7, 0)).toBe(2);
    expect(round(1.4, 0)).toBe(1);
  });

  it('should handle negative precision', () => {
    expect(round(1234, -2)).toBe(1200);
    expect(round(1567, -2)).toBe(1600);
  });
});
