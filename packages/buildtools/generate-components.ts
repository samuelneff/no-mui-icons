import * as fs from 'fs/promises';
import * as path from 'path';
import { replacePlaceholers } from 'utik';

import { iconInfos, loadTemplate, packageInfos } from './util';

export async function generateComponents() {

  console.log('Generating component files');

  const componentTemplate = await loadTemplate('component.ts.file.txt');

  await Promise.all(
    (await iconInfos()).map(
      iconInfo => {

        const {
          packageInfo,
          functionName,
        } = iconInfo;

        const componentContent = replacePlaceholers(
          {
            text: componentTemplate,
            placeholders: {
              ...packageInfo,
              ...iconInfo,
            },
            markerPrefix: '%',
            markerSuffix: '%',
          }
        );

        const componentPath = path.join(packageInfo.packageDir, `${ functionName }.js`);
        return fs.writeFile(componentPath, componentContent);
      }
    )
  );

  console.log('  Done');
}
