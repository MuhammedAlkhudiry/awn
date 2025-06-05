export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const manifest = {
  name: 'capitalize',
  description: 'Capitalizes the first character of string',
  category: 'string' as const,
  dependencies: [],
  tags: ['string', 'capitalize', 'text'],
  examples: [
    "capitalize('hello') // 'Hello'",
    "capitalize('HELLO') // 'Hello'",
  ],
};
