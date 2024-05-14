import { copyReadme } from './copy-readme';
import { generateComponents } from './generate-components';
import { generateDefinitions } from './generate-definitions';
import { generateIndexes } from './generate-indexes';

async function main() {
  try {
    await generateDefinitions();
    await generateComponents();
    await generateIndexes();
    await copyReadme();
  } catch (ex) {
    console.error((ex as Error).stack ?? ex);
    return 1;
  }
}

main();
