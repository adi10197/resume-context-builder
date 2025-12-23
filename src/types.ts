export interface GenerateOptions {
  type: string;
  job?: string;
  reference?: string;
  output?: string;
  paste: boolean;
  provider: string;
}

export interface ProviderConfig {
  name: string;
  command: string;
  checkAvailable: () => boolean;
  execute: (prompt: string, outputFile: string) => boolean;
}
