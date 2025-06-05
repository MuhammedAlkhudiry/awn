export function flatten<T>(array: (T | T[])[]): T[] {
  const result: T[] = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}

export const manifest = {
  name: 'flatten',
  description: 'Flattens array a single level deep',
  category: 'array' as const,
  dependencies: [],
  tags: ['array', 'flatten', 'nested'],
  examples: [
    'flatten([1, [2, 3], 4]) // [1, 2, 3, 4]',
    "flatten(['a', ['b', 'c'], 'd']) // ['a', 'b', 'c', 'd']",
  ],
};
