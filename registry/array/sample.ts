export function sample<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array[Math.floor(Math.random() * array.length)];
}

export const manifest = {
  name: 'sample',
  description: 'Gets a random element from array',
  category: 'array' as const,
  dependencies: [],
  tags: ['array', 'random', 'sample'],
  examples: [
    'sample([1, 2, 3, 4, 5]) // Random element',
    "sample(['a', 'b', 'c']) // Random element",
  ],
};
