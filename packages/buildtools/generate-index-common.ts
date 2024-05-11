import * as fs from 'fs/promises';
import * as path from 'path';
import { replacePlaceholers } from 'utikity';
import { IconStyle, iconInfos, iconStyles, loadTemplate, packageInfos } from './util';

export interface GenerateCommonIndexFilesArgs {
  fileTemplateFilename: string;
  functionTemplateFilename: string;
  targetFilename: string;
}
export async function generateCommonIndexFiles({
  fileTemplateFilename,
  functionTemplateFilename,
  targetFilename,
}) {

  console.log(`Generating ${ targetFilename } files`);

  const fileTemplate = await loadTemplate(fileTemplateFilename);
  const functionTemplate = await loadTemplate(functionTemplateFilename);

  const exportsByIconStyle = iconStyles.reduce(
    (hash, iconStyle) => {
      hash[ iconStyle ] = [];
      return hash;
    },
    {} as Record<IconStyle, string[]>
  );

  for (const iconInfo of await iconInfos()) {
    exportsByIconStyle[ iconInfo.packageInfo.iconStyle ].push(
      replacePlaceholers(
        {
          text: functionTemplate,
          placeholders: {
            ...iconInfo.packageInfo,
            ...iconInfo,
           },
          markerPrefix: '%',
          markerSuffix: '%',
        }
      )
    );
  }

  await Promise.all(
    packageInfos.map(
      packageInfo => {
        const {
          iconStyle,
          packageDir,
          packageName,
        } = packageInfo;
        const exportLines = exportsByIconStyle[ iconStyle ].join('\n');
        const indexContent = replacePlaceholers(
          {
            text: fileTemplate,
            placeholders: {
              ...packageInfo,
              exportLines
            },
            markerPrefix: '%',
            markerSuffix: '%',
          }
        );
        const indexPath = path.join(packageDir, targetFilename);
        console.log(`  Writing '${ packageName}/${ targetFilename }'`);
        return fs.writeFile(indexPath, indexContent);
      }
    )
  );

  console.log('  Done');
}
