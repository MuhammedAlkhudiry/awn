export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export const manifest = {
  name: 'kebabCase',
  description: 'Converts string to kebab-case format',
  category: 'string' as const,
  dependencies: [],
  tags: ['string', 'case', 'conversion'],
  examples: [
    "kebabCase('helloWorld') // 'hello-world'",
    "kebabCase('Hello World') // 'hello-world'",
  ],
};
