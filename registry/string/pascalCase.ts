export function pascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
    .replace(/^[a-z]/, match => match.toUpperCase());
}

export const manifest = {
  name: 'pascalCase',
  description: 'Converts string to PascalCase format',
  category: 'string' as const,
  dependencies: [],
  tags: ['string', 'case', 'conversion'],
  examples: [
    "pascalCase('hello world') // 'HelloWorld'",
    "pascalCase('hello-world') // 'HelloWorld'",
  ],
};
