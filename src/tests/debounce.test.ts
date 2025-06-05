import { describe, it, expect, vi } from 'vitest';
import { debounce } from '../../registry/string/debounce.js';

describe('debounce', () => {
  it('should debounce function calls', async () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(mockFn).not.toHaveBeenCalled();

    await new Promise(resolve => setTimeout(resolve, 150));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should call immediately when immediate flag is true', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100, true);

    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments correctly', async () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 50);

    debouncedFn('arg1', 'arg2');

    await new Promise(resolve => setTimeout(resolve, 100));
    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
  });
});
