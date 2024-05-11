import { generateCommonIndexFiles } from './generate-index-common';

export function generateIndexes() {

  return generateCommonIndexFiles(
    {
      fileTemplateFilename: 'index.js.file.txt',
      functionTemplateFilename: 'index.js.function.txt',
      targetFilename: 'index.js'
    }
  );
}
