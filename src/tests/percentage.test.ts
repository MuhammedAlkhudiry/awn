import { describe, it, expect } from 'vitest';
import { percentage } from '../../registry/number/percentage.js';

describe('percentage', () => {
  it('should calculate percentage', () => {
    expect(percentage(25, 100)).toBe(25);
    expect(percentage(1, 3, 2)).toBe(33.33);
    expect(percentage(50, 200)).toBe(25);
  });

  it('should handle zero total', () => {
    expect(percentage(5, 0)).toBe(0);
  });

  it('should handle zero value', () => {
    expect(percentage(0, 100)).toBe(0);
  });

  it('should handle different precisions', () => {
    expect(percentage(1, 3, 0)).toBe(33);
    expect(percentage(1, 3, 1)).toBe(33.3);
    expect(percentage(1, 3, 3)).toBe(33.333);
  });

  it('should handle values greater than total', () => {
    expect(percentage(150, 100)).toBe(150);
  });
});
