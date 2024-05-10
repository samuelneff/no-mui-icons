import { generateDefinitions } from './generate-definitions';

async function main() {
  try {
    await generateDefinitions();
  } catch (ex) {
    console.error((ex as Error).stack ?? ex);
  }
}

main();
