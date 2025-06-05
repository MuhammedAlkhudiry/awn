export function uniqBy<T, K>(array: T[], iteratee: (item: T) => K): T[] {
  const seen = new Set<K>();
  const result: T[] = [];

  for (const item of array) {
    const key = iteratee(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }

  return result;
}

export const manifest = {
  name: 'uniqBy',
  description:
    'Creates a duplicate-free version of an array using iteratee function',
  category: 'array' as const,
  dependencies: [],
  tags: ['array', 'unique', 'duplicates', 'iteratee'],
  examples: [
    'uniqBy([{id: 1}, {id: 2}, {id: 1}], item => item.id) // [{id: 1}, {id: 2}]',
    "uniqBy(['a', 'bb', 'ccc', 'dd'], item => item.length) // ['a', 'bb', 'ccc']",
  ],
};
