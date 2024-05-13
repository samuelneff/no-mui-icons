import { useCallback, useState } from 'react';

import { BrowseOptionBar } from './BrowseOptionBar';
import { colorNames, styleNames } from './iconInfo';

import styles from './BrowseSection.module.scss';
import { BrowseIconList } from './BrowseIconList';
import { BrowseDialog } from './BrowseDialog';

export function BrowseSection() {
  const [ searchText, setSearchText ] = useState('');
  const [ selectedStyle, setSelectedStyle ] = useState(styleNames[ 0 ]);
  const [ selectedColor, setSelectedColor ] = useState(colorNames[ 0 ]);
  const [ selectedIcon, setSelectedIcon ] = useState('');

  const handleSearchTextChange = useCallback(
    (newSearchText: string) => {
      setSearchText(newSearchText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase());
    },
    []
  );

  const handleIconClick = useCallback(
    (newSelectedIcon: string) => {
      setSelectedIcon(newSelectedIcon);
    },
    []
  );

  const handleBrowseDialogClose = useCallback(
    () => {
      setSelectedIcon('');
    },
    []
  );

  return (
    <div className={styles.browseSection}>
      <BrowseOptionBar
        searchText={searchText}
        selectedStyle={selectedStyle}
        selectedColor={selectedColor}
        onSearchTextChange={handleSearchTextChange}
        onIconStyleChange={setSelectedStyle}
        onColorChange={setSelectedColor}
      />

      <BrowseIconList
        searchText={searchText}
        selectedStyle={selectedStyle}
        selectedColor={selectedColor}
        onIconClick={handleIconClick}
      />

      <BrowseDialog
        selectedIcon={selectedIcon}
        onCloseDialog={handleBrowseDialogClose}
      />
    </div>
  );
}
