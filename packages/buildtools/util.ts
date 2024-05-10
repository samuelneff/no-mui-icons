import { identity, kebabCase } from 'lodash';
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
  moduleName: string;
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
      packageDir: path.join(packagesDir, partialPackageInfo.packageName),
      moduleName: kebabCase(partialPackageInfo.iconStyle),
    }
  )
);

export const filenamePartsPattern = new RegExp(
  `(.+?)(?:${ packageInfos.map(i => i.filenameSuffix).filter(identity).join('|') })?${ svgFinalSuffix }`
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
  const mismatchFilenames = [] as string[];

  const filenames = await fs.readdir(svgDir);

  iconInfosCache = await Promise.all(
    filenames.map(
      async (filename: string) => {

        const packageInfo = packageInfoFromFilename(filename);
        const filePath = path.join(svgDir, filename);
        const svgText = await fs.readFile(filePath, 'utf-8');

        const match = filenamePartsPattern.exec(filename);
        if (match === null) {
          mismatchFilenames.push(filename);
          return {} as IconInfo; // not really IconInfo, but we'll throw an error before returning from outer function
        }
        const baseName = match[ 1 ];
        const functionName = baseNameToFunctionName(baseName, packageInfo.iconStyle);

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

  return iconInfosCache;
}

/**
 * Very limited support for source casing; works for necessary use cases.
 */
function pascalCase(filename: string) {
  let nextIsUpper = true;
  let pascalCaseText = '';

  for (const c of filename) {
    if (nextIsUpper) {
      pascalCaseText += c.toLocaleUpperCase();
      nextIsUpper = false;
    } else if (c === '_' || c === ' ') {
      nextIsUpper = true;
    } else {
      pascalCaseText += c;
    }
  }

  return pascalCaseText;
}

function baseNameToFunctionName(baseName: string, iconStyle: IconStyle) {
  const numberSplit = /^([0-9]+)_?(.+)/.exec(baseName);
  try {
    const functionStart = numberSplit
      ? pascalCase(toWords.convert(Number.parseInt(numberSplit[ 1 ]))) + pascalCase(numberSplit[ 2 ])
      : pascalCase(baseName);
    return `${ functionStart }${ pascalCase(iconStyle) }Icon`
  } catch (ex) {
    throw new Error(
      `Error converting '${ baseName }' to variable name.\nnumberSplit:\n${ JSON.stringify(numberSplit, undefined, 2) }`,
      {
        cause: ex
      }
    );
  }
}
