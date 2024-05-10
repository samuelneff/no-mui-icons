import { camelCase, pascalCase } from "change-case";
import { identity } from 'lodash';
import * as fs from 'fs/promises';
import * as path from 'path';
import { ToWords } from 'to-words';

const toWords = new ToWords(
  {
    localeCode: 'en-US',
    converterOptions: {
      currency: false,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: true,
    },
  }
);

export const packagesDir = path.join(__dirname, '..');
export const rootDir = path.join(packagesDir, '..');
export const buildtoolsDir = __dirname;
export const corePackageName = 'core';
export const svgDir = path.join(rootDir, 'material-ui/packages/mui-icons-material/material-icons');
export const svgFinalSuffix = '_24px.svg';

export interface PackageInfo {
  packageName: string;
  packageDir: string;
  filenameSuffix: string;
  iconStyle: IconStyle;
}

export interface IconInfo {
  packageInfo: PackageInfo;
  filePath: string;
  filename: string;
  baseName: string;
  functionName: string;
  svgText: string;
}

export enum IconStyle {
  filled = 'filled',
  outlined = 'outlined',
  rounded = 'rounded',
  sharp = 'sharp',
  twoTone = 'twoTone',
}

export const iconStyles = Object.keys(IconStyle) as IconStyle[];

export const packageInfos: PackageInfo[] = [
  {
    packageName: 'filled',
    filenameSuffix: '',
    iconStyle: IconStyle.filled,
  },
  {
    packageName: 'outlined',
    filenameSuffix: '_outlined',
    iconStyle: IconStyle.outlined,
  },
  {
    packageName: 'rounded',
    filenameSuffix: '_rounded',
    iconStyle: IconStyle.rounded,
  },
  {
    packageName: 'sharp',
    filenameSuffix: '_sharp',
    iconStyle: IconStyle.sharp,
  },
  {
    packageName: 'two-tone',
    filenameSuffix: '_two_tone',
    iconStyle: IconStyle.twoTone,
  },
].map(
  partialPackageInfo => (
    {
      ...partialPackageInfo,
      packageDir: path.join(packagesDir, partialPackageInfo.packageName)
    }
  )
);

export const filenamePartsPattern = new RegExp(
  `(.+)(?:${ packageInfos.map(i => i.filenameSuffix).filter(identity).join('|') })?${ svgFinalSuffix }`
);

function packageInfoFromFilename(filename: string) {

  for (const packageInfo of packageInfos) {
    if (packageInfo.filenameSuffix && filename.endsWith(`${ packageInfo.filenameSuffix }${ svgFinalSuffix }`)) {
      return packageInfo;
    }
  }

  // none of the defined suffixes match so it must be filled, default
  return packageInfos[0];
}

let iconInfosCache: IconInfo[];
export async function iconInfos() {

  if (iconInfosCache) {
    return iconInfosCache;
  }
  const mismatchFilenames = [];

  const filenames = await fs.readdir(svgDir);

  iconInfosCache = await Promise.all(
    filenames.map(
      async (filename: string) => {

        const packageInfo = packageInfoFromFilename(filename);
        const filePath = path.join(packageInfo.packageDir, filename);
        const svgText = await fs.readFile(filePath, 'utf-8');

        const match = filenamePartsPattern.exec(filename);
        if (match === null) {
          mismatchFilenames.push(filename);
          return;
        }
        const baseName = match[ 1 ];

        const numberSplit = /^(\d)+(.+)/.exec(baseName)?.[ 0 ];
        const functionName = numberSplit
          ? pascalCase(toWords.convert(Number.parseInt(numberSplit[ 1 ]))) + pascalCase(numberSplit[ 2 ])
          : pascalCase(baseName);

        return {
          packageInfo,
          filePath,
          filename,
          baseName,
          functionName,
          svgText,
        };
      }
    )
  );

  if (mismatchFilenames.length) {
    const reportFilenames = mismatchFilenames.slice(0, 5).join('\n            ');
    const overflow = mismatchFilenames.length <= 5 ? '' : `\n            (${ mismatchFilenames.length } in error)`;
    throw new Error(`Unexpected filename encountered and cannot continue. Filename does not match expected pattern.\n  Filename: ${ reportFilenames }${ overflow }\n  Pattern : ${ filenamePartsPattern }`);
  }
}
