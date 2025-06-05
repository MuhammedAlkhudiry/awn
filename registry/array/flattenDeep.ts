export function flattenDeep(array: unknown[]): unknown[] {
  const result: unknown[] = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

export const manifest = {
  name: 'flattenDeep',
  description: 'Recursively flattens array to a single level',
  category: 'array' as const,
  dependencies: [],
  tags: ['array', 'flatten', 'recursive', 'deep'],
  examples: [
    'flattenDeep([1, [2, [3, [4]]]]) // [1, 2, 3, 4]',
    "flattenDeep(['a', ['b', ['c', 'd']]]) // ['a', 'b', 'c', 'd']",
  ],
};
