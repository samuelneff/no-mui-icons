import * as fs from 'fs/promises';
import * as path from 'path';
import { replacePlaceholers } from 'utik';
import { IconStyle, iconInfos, iconStyles, loadTemplate, packageInfos } from './util';

export async function generateDefinitions() {

  console.log('Generating definition files');

  const fileTemplate = await loadTemplate('index.d.ts.file.txt');
  const functionTemplate = await loadTemplate('index.d.ts.function.txt');

  const exportsByIconStyle = iconStyles.reduce(
    (hash, iconStyle) => {
      hash[ iconStyle ] = [];
      return hash;
    },
    {} as Record<IconStyle, string[]>
  );

  for (const iconInfo of await iconInfos()) {
    const {
      packageInfo: {
        iconStyle
      },
      functionName
    } = iconInfo;
    exportsByIconStyle[ iconInfo.packageInfo.iconStyle ].push(
      replacePlaceholers(
        {
          text: functionTemplate,
          placeholders: { functionName },
          markerPrefix: '%',
          markerSuffix: '%',
        }
      )
    );
  }

  await Promise.all(
    packageInfos.map(
      ({ iconStyle, moduleName, packageDir }) => {
        const exportLines = exportsByIconStyle[ iconStyle ].join('\n');
        const indexContent = replacePlaceholers(
          {
            text: fileTemplate,
            placeholders: {
              moduleName,
              exportLines
            },
            markerPrefix: '%',
            markerSuffix: '%',
          }
        );
        const indexPath = path.join(packageDir, 'index.d.ts');
        console.log(`  Writing '${ indexPath }'`);
        return fs.writeFile(indexPath, indexContent);
      }
    )
  );

  console.log('  Done');
}
