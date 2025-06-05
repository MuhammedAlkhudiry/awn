export function snakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

export const manifest = {
  name: 'snakeCase',
  description: 'Converts string to snake_case format',
  category: 'string' as const,
  dependencies: [],
  tags: ['string', 'case', 'conversion'],
  examples: [
    "snakeCase('helloWorld') // 'hello_world'",
    "snakeCase('Hello World') // 'hello_world'",
  ],
};
