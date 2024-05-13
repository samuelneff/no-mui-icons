import { FunctionComponent, useMemo } from 'react';
import { StyleName, iconKeySuffixPattern, iconSetByName } from './iconInfo';
import { startCase } from 'lodash';

import styles from './BrowseIconList.module.scss';

export interface BrowseIconListProps {
  searchText: string;
  selectedStyle: StyleName;
  selectedColor: string;
}

export function BrowseIconList({
  searchText,
  selectedStyle,
  selectedColor
}: BrowseIconListProps) {

  const selectedIcons = useMemo(
    () => {
      const iconSet = iconSetByName[ selectedStyle ];
      const keys = filterKeys(
        Object.keys(iconSet).sort(),
        searchText
      );
      return keys.map(key => iconSet[ key as keyof typeof iconSet ]) as FunctionComponent[];
    },
    [
      searchText,
      selectedStyle
    ]
  );

  const colorClassName = styles[ `browseIconList${ startCase(selectedColor) }` ];

  return (
    <div className={`${ styles.browseIconList } ${ colorClassName }`}>
      {
        selectedIcons.length
          ? selectedIcons.map(
            Icon => (
              <div
                key={Icon.name}
                className={styles.iconContainer}
              >
                <Icon />
                <div className={styles.iconLabel}>
                  {Icon.name.replace(iconKeySuffixPattern, '')}
                </div>
              </div>
            ))
          : (
            <>
              <div className={styles.noIcons}>
                No icons match the search text '{ searchText }'.
              </div>
              <div className={styles.hintNoIcons}>
                Searches are performed against icons that start with the search text,
                contain the search text, or contain all of the letters in the search text.
              </div>
            </>
          )
      }
    </div>
  )
}

function filterKeys(keys: string[], searchText: string) {
  if (!searchText) {
    return keys;
  }

  const keyBases = keys.map(key => key.replace(iconKeySuffixPattern, ''));

  const startMatches = [];
  const containsMatches = [];
  const charsMatches = [];

  const charsRegex = new RegExp(searchText.split('').join('.*'), 'i');

  for (const key of keyBases) {
    if (key === searchText) {
      startMatches.unshift(key);
      continue;
    }

    if (key.startsWith(searchText)) {
      startMatches.push(key);
      continue;
    }

    if (key.includes(searchText)) {
      containsMatches.push(key);
      continue;
    }

    if (charsRegex.test(key)) {
      charsMatches.push(key);
      continue;
    }
  }

  const selectedSuffix = iconKeySuffixPattern.exec(keys[ 0 ])?.[ 0 ];

  return [
    ...startMatches,
    ...containsMatches,
    ...charsMatches
  ].map(
    key => `${ key }${ selectedSuffix }`
  );
}
