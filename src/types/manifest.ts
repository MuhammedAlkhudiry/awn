export interface UtilityManifest {
  name: string;
  description: string;
  category: 'array' | 'string' | 'number';
  dependencies: string[];
  tags: string[];
  examples?: string[];
}
