export interface UtilsConfig {
  $schema?: string;
  utils: {
    path: string;
    alias?: string;
  };
  aliases?: {
    utils?: string;
    [key: string]: string | undefined;
  };
}

export const defaultConfig: UtilsConfig = {
  $schema: 'https://awn.dev/schema.json',
  utils: {
    path: './src/utils',
  },
  aliases: {
    utils: '~/utils',
  },
};