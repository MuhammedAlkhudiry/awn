export function random(lower = 0, upper = 1, floating = false): number {
  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }

  const result = Math.random() * (upper - lower) + lower;

  return floating ? result : Math.floor(result);
}

export const manifest = {
  name: 'random',
  description:
    'Produces a random number between the inclusive lower and upper bounds',
  category: 'number' as const,
  dependencies: [],
  tags: ['number', 'random', 'generator'],
  examples: [
    'random(0, 10) // Random integer between 0-10',
    'random(0, 1, true) // Random float between 0-1',
  ],
};
