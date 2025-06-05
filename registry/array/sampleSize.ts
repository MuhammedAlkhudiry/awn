export function sampleSize<T>(array: T[], n: number): T[] {
  if (n >= array.length) return [...array];
  if (n <= 0) return [];

  const result: T[] = [];
  const used = new Set<number>();

  while (result.length < n) {
    const index = Math.floor(Math.random() * array.length);
    if (!used.has(index)) {
      used.add(index);
      result.push(array[index]);
    }
  }

  return result;
}

export const manifest = {
  name: 'sampleSize',
  description: 'Gets n random elements from array',
  category: 'array' as const,
  dependencies: [],
  tags: ['array', 'random', 'sample', 'multiple'],
  examples: [
    'sampleSize([1, 2, 3, 4, 5], 3) // 3 random elements',
    "sampleSize(['a', 'b', 'c', 'd'], 2) // 2 random elements",
  ],
};
