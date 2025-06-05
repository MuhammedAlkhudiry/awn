export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
}

export const manifest = {
  name: 'debounce',
  description: 'Creates a debounced function that delays invoking func',
  category: 'string' as const,
  dependencies: [],
  tags: ['function', 'debounce', 'timing', 'performance'],
  examples: [
    'const debouncedFn = debounce(fn, 300)',
    'const immediateFn = debounce(fn, 300, true)',
  ],
};
