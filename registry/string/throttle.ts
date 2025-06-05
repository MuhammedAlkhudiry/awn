export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export const manifest = {
  name: 'throttle',
  description:
    'Creates a throttled function that only invokes func at most once per limit',
  category: 'string' as const,
  dependencies: [],
  tags: ['function', 'throttle', 'timing', 'performance'],
  examples: [
    'const throttledFn = throttle(fn, 1000)',
    'throttledFn() // Called immediately',
  ],
};
