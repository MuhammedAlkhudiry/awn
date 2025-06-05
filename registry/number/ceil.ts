export function ceil(number: number, precision = 0): number {
  const factor = Math.pow(10, precision);
  return Math.ceil(number * factor) / factor;
}

export const manifest = {
  name: 'ceil',
  description: 'Computes number rounded up to precision',
  category: 'number' as const,
  dependencies: [],
  tags: ['number', 'ceil', 'precision'],
  examples: ['ceil(1.2345, 2) // 1.24', 'ceil(1.2345) // 2'],
};
