import * as fs from 'fs/promises';
import * as path from 'path';
import { packageInfos, rootDir } from './util';

export async function copyReadme() {
  const source = await fs.readFile(path.join(rootDir, 'README.md'));

  await Promise.all(
    packageInfos.map(
      async packageInfo => {
        await fs.writeFile(
          path.join(packageInfo.packageDir, 'README.md'),
          source
        );
      }
    )
  )
}
