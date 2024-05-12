import { useState } from 'react';

import { BrowseOptionBar } from './BrowseOptionBar';
import { colorNames, styleNames } from './iconInfo';

import styles from './BrowseSection.module.scss';

export function BrowseSection() {
  const [ searchText, setSearchText ] = useState('');
  const [ selectedStyle, setSelectedStyle ] = useState(styleNames[ 0 ]);
  const [ selectedColor, setSelectedColor ] = useState(colorNames[ 0 ]);

  return (
    <div className={styles.browseSection}>
      <BrowseOptionBar
        searchText={searchText}
        selectedStyle={selectedStyle}
        selectedColor={selectedColor}
        onSearchTextChange={setSearchText}
        onIconStyleChange={setSelectedStyle}
        onColorChange={setSelectedColor}
      />
    </div>
  );
}
