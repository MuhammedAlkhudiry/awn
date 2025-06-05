export function camelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, match => match.toLowerCase());
}

export const manifest = {
  name: 'camelCase',
  description: 'Converts string to camelCase format',
  category: 'string' as const,
  dependencies: [],
  tags: ['string', 'case', 'conversion'],
  examples: [
    "camelCase('hello world') // 'helloWorld'",
    "camelCase('Hello_World') // 'helloWorld'",
  ],
};
