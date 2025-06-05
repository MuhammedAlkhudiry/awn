export function percentage(
  value: number,
  total: number,
  precision = 2
): number {
  if (total === 0) return 0;
  const factor = Math.pow(10, precision);
  return Math.round((value / total) * 100 * factor) / factor;
}

export const manifest = {
  name: 'percentage',
  description: 'Calculates percentage with precision',
  category: 'number' as const,
  dependencies: [],
  tags: ['number', 'percentage', 'calculation'],
  examples: ['percentage(25, 100) // 25', 'percentage(1, 3, 2) // 33.33'],
};
