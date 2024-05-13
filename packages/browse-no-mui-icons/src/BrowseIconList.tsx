import { FunctionComponent, useCallback, useMemo } from 'react';
import { startCase } from 'lodash';

import { BrowseOptionsCommonProps } from './BrowseOptionBar';
import { iconBaseName, iconKeySuffixPattern, iconSetByName } from './iconInfo';

import styles from './BrowseIconList.module.scss';

export interface BrowseIconListCommonProps {
  onIconClick(iconFunctionName: string): void;
}


export interface BrowseIconListProps extends BrowseOptionsCommonProps, BrowseIconListCommonProps {
}

export function BrowseIconList({
  searchText,
  selectedStyle,
  selectedColor,
  onIconClick,
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
              <BrowseIconListItem
                key={Icon.name}
                Icon={Icon}
                onIconClick={onIconClick}
              />
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

interface BrowseIconListItemProps extends BrowseIconListCommonProps {
  Icon: FunctionComponent;

}
function BrowseIconListItem({
  Icon,
  onIconClick,
}: BrowseIconListItemProps) {

  const handleClick = useCallback(
    () => {
      onIconClick(Icon.name);
    },
    [
      Icon,
      onIconClick,
    ]
  );

  return (
    <div
      className={styles.iconContainer}
      onClick={handleClick}
    >
      <Icon />
      <div className={styles.iconLabel}>
        {iconBaseName(Icon)}
      </div>
    </div>
  );
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
    const lowercaseKey = key.toLowerCase(); // not i18n safe but all icons and search are is English letters only
    if (lowercaseKey === searchText) {
      startMatches.unshift(key);
      continue;
    }

    if (lowercaseKey.startsWith(searchText)) {
      startMatches.push(key);
      continue;
    }

    if (lowercaseKey.includes(searchText)) {
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
