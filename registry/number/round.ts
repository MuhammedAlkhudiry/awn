export function round(number: number, precision = 0): number {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export const manifest = {
  name: 'round',
  description: 'Rounds number to precision',
  category: 'number' as const,
  dependencies: [],
  tags: ['number', 'round', 'precision'],
  examples: ['round(1.2345, 2) // 1.23', 'round(1.2365, 2) // 1.24'],
};
