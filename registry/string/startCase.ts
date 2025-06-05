export function startCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]/g, ' ')
    .replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    );
}

export const manifest = {
  name: 'startCase',
  description: 'Converts string to start case (Title Case)',
  category: 'string' as const,
  dependencies: [],
  tags: ['string', 'case', 'conversion', 'title'],
  examples: [
    "startCase('hello_world') // 'Hello World'",
    "startCase('helloWorld') // 'Hello World'",
  ],
};
