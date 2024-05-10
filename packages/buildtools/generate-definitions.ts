import * as fs from 'fs/promises';
import * as path from 'path';
import { IconStyle, iconInfos, iconStyles, packageInfos } from './util';

export async function generateDefinitions() {

  console.log('Generating definition files');

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
      `  function ${ functionName }(props: SVGProps<SVGSVGElement>): SVGSVGElement;`
    );
  }

  await Promise.all(
    packageInfos.map(
      async packageInfo => {
        const exportLines = exportsByIconStyle[ packageInfo.iconStyle ].join('\n');
        const indexContent = `import { SVGProps } from 'react';\n\ndeclare module 'no-mui-icons/${ packageInfo.moduleName }' {\n${ exportLines }\n}\n`;
        const indexPath = path.join(packageInfo.packageDir, 'index.d.ts');
        console.log(`  Writing '${ indexPath }'`)
        await fs.writeFile(path.join(packageInfo.packageDir, 'index.d.ts'), indexContent);
      }
    )
  )
}
