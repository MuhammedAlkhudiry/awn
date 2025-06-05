export function inRange(number: number, start: number, end?: number): boolean {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  return number >= start && number < end;
}

export const manifest = {
  name: 'inRange',
  description:
    'Checks if number is between start and up to, but not including, end',
  category: 'number' as const,
  dependencies: [],
  tags: ['number', 'range', 'check'],
  examples: [
    'inRange(5, 1, 10) // true',
    'inRange(0, 1, 10) // false',
    'inRange(5, 10) // true (0 to 10)',
  ],
};
