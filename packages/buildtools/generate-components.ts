import * as fs from 'fs/promises';
import * as path from 'path';
import { replacePlaceholers } from 'utikity';

import { iconInfos, loadTemplate, packageInfos } from './util';

export async function generateComponents() {

  console.log('Generating component files');

  const componentTemplate = await loadTemplate('component.ts.file.txt');
  let generatedCount = 0;
  const infos = await iconInfos();

  const countFormatter = new Intl.NumberFormat(
    undefined,
    {
      useGrouping: true
    }
  );

  const infosLength = countFormatter.format(infos.length);

  await Promise.all(
    infos.map(
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
        if (++generatedCount % 1000 === 0 || generatedCount === infos.length) {
          const countDisplay = countFormatter.format(generatedCount).padStart(infosLength.length);
          console.log(`  Writing ${ countDisplay } of ${ infosLength }`)
        }
        return fs.writeFile(componentPath, componentContent);

      }
    )
  );

  console.log('  Done');
}
