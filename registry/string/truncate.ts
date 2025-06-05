export interface TruncateOptions {
  length?: number;
  omission?: string;
  separator?: string | RegExp;
}

export function truncate(str: string, options: TruncateOptions = {}): string {
  const { length = 30, omission = '...', separator } = options;

  if (str.length <= length) {
    return str;
  }

  let truncated = str.slice(0, length - omission.length);

  if (separator) {
    const lastIndex = truncated.lastIndexOf(separator as string);
    if (lastIndex > 0) {
      truncated = truncated.slice(0, lastIndex);
    }
  }

  return truncated + omission;
}

export const manifest = {
  name: 'truncate',
  description: 'Truncates string with customizable options',
  category: 'string' as const,
  dependencies: [],
  tags: ['string', 'truncate', 'text'],
  examples: [
    "truncate('hello world', { length: 8 }) // 'hello...'",
    "truncate('hello world', { length: 8, omission: '---' }) // 'hello---'",
  ],
};
