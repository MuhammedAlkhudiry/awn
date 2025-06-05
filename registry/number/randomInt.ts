export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const manifest = {
  name: 'randomInt',
  description:
    'Produces a random integer between the inclusive min and max bounds',
  category: 'number' as const,
  dependencies: [],
  tags: ['number', 'random', 'integer'],
  examples: [
    'randomInt(1, 5) // Random integer between 1-5',
    'randomInt(10, 20) // Random integer between 10-20',
  ],
};
