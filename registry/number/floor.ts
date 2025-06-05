export function floor(number: number, precision = 0): number {
  const factor = Math.pow(10, precision);
  return Math.floor(number * factor) / factor;
}

export const manifest = {
  name: 'floor',
  description: 'Computes number rounded down to precision',
  category: 'number' as const,
  dependencies: [],
  tags: ['number', 'floor', 'precision'],
  examples: ['floor(1.2345, 2) // 1.23', 'floor(1.2345) // 1'],
};
