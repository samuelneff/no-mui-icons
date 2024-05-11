import { generateComponents } from './generate-components';
import { generateDefinitions } from './generate-definitions';

async function main() {
  try {
    await generateDefinitions();
    await generateComponents();
  } catch (ex) {
    console.error((ex as Error).stack ?? ex);
  }
}

main();
