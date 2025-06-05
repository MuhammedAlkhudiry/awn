export function uniq<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export const manifest = {
  name: 'uniq',
  description: 'Creates a duplicate-free version of an array',
  category: 'array' as const,
  dependencies: [],
  tags: ['array', 'unique', 'duplicates'],
  examples: [
    'uniq([1, 2, 2, 3, 3, 4]) // [1, 2, 3, 4]',
    "uniq(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']",
  ],
};
