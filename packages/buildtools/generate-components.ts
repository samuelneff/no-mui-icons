import * as fs from 'fs/promises';
import * as path from 'path';
import { replacePlaceholers } from 'utikity';

import { iconInfos, loadTemplate, packageInfos } from './util';
import { camelCase } from 'lodash';

export async function generateComponents() {

  console.log('Generating component files');

  const componentTemplate = await loadTemplate('component.jsx.file.txt');
  const svgTemplate = await loadTemplate('component.jsx.svg.txt');

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
          svgText,
        } = iconInfo;

        const placeholders = {
          ...packageInfo,
          ...iconInfo,
          svgText: svgText.replace(
            '<svg ',
            ''
          )
        };

        const newSvgText = svgTextToJsx(
          replacePlaceholers(
            {
              text: svgTemplate,
              placeholders,
              markerPrefix: '%',
              markerSuffix: '%',
            }
          )
        );

        const componentContent = replacePlaceholers(
          {
            text: componentTemplate,
            placeholders: {
              ...placeholders,
              svgText: newSvgText
            },
            markerPrefix: '%',
            markerSuffix: '%',
          }
        );

        const componentPath = path.join(packageInfo.packageDir, `${ functionName }.jsx`);
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

function svgTextToJsx(svgText: string) {

  return svgText.replace(

    // There are only two places where styles are used in the icons, both within screen_search_desktop_24px.svg
    // style="enable-background:new 0 0 24 24;"
    // style="fill:none"

    /style="([\w-]+):([^"]+?);?"/g,
    styleConverter
  ).replace(

    // SVG attributes with a dash in them need to be converted to camel case
    // enable-background="new 0 0 24 24"
    // fill-opacity=".9"
    // fill-rule="evenodd"
    // clip-rule="evenodd"
    //
    // This is a big one; there are 5,779 changes at time of writing
    //
    / ([a-z]+-[a-z-]+)="/g,
    attributeNameCaser
  ).replace(

    // edit_attributes_24px.svg specifies a class on one of the paths. It's not
    // used but we need to fix it to be className to work in JSX.
    " class=",
    " className="
  );
}
/**
 * Extremely naive conversion from text style attributes to object styles that React needs. It works for the
 * very small use cases we need but it's possible it'll need to be enhanced in the future if new icons are
 * added that have more complex inline styling.
 */
function styleConverter(_fullMatch: string, propertyName: string, propertyValue: string) {
  const jsxName = camelCase(propertyName);
  const jsxValue = `'${ propertyValue }'`;
  return `style={{${ jsxName }: ${ jsxValue }}}`
}

function attributeNameCaser(_fullMatch: string, attributeName: string) {
  return ` ${ camelCase(attributeName) }="`;
}