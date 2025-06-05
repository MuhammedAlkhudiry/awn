export function clamp(number: number, lower: number, upper: number): number {
  if (lower > upper) {
    throw new Error('Lower bound cannot be greater than upper bound');
  }

  return Math.min(Math.max(number, lower), upper);
}

export const manifest = {
  name: 'clamp',
  description: 'Clamps number within the inclusive lower and upper bounds',
  category: 'number' as const,
  dependencies: [],
  tags: ['number', 'clamp', 'bounds'],
  examples: [
    'clamp(5, 1, 10) // 5',
    'clamp(-5, 1, 10) // 1',
    'clamp(15, 1, 10) // 10',
  ],
};
