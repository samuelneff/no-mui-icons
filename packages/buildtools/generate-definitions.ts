import { generateCommonIndexFiles } from './generate-index-common';

export function generateDefinitions() {

  return generateCommonIndexFiles(
    {
      fileTemplateFilename: 'index.d.ts.file.txt',
      functionTemplateFilename: 'index.d.ts.function.txt',
      targetFilename: 'index.d.ts'
    }
  );
}
