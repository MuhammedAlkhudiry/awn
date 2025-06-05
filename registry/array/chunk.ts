export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error('Chunk size must be greater than 0');
  }

  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

export const manifest = {
  name: 'chunk',
  description:
    'Creates an array of elements split into groups the length of size',
  category: 'array' as const,
  dependencies: [],
  tags: ['array', 'chunk', 'split'],
  examples: [
    'chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]',
    "chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]",
  ],
};
