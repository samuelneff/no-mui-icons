import { StyleName, colorNames, styleIconByName, styleNames } from './iconInfo';
import styles from './BrowseOptionBar.module.scss';
import { Select, TextField } from '@radix-ui/themes';
import { ChangeEvent, useCallback } from 'react';
import { SearchFilledIcon } from 'no-mui-icons-filled';
import { startCase } from 'lodash';

export interface BrowseOptionsCommonProps {
  searchText: string;
  selectedStyle: StyleName;
  selectedColor: string;
}

export interface BrowseOptionBarProps extends BrowseOptionsCommonProps {
  onSearchTextChange(value: string): void;
  onIconStyleChange(value: StyleName): void;
  onColorChange(value: string): void;
}

export function BrowseOptionBar({
  searchText,
  selectedStyle,
  selectedColor,
  onSearchTextChange,
  onIconStyleChange,
  onColorChange,
}: BrowseOptionBarProps) {

  const handleSearchTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onSearchTextChange(event.target.value);
    },
    [
      onSearchTextChange
    ]
  );

  return (
    <div className={styles.controls}>

      <div className={styles.controlContainer}>
        <div className={styles.control}>
          <TextField.Root
            className={styles.searchInput}
            placeholder="Search for icons"
            radius="large"
            value={searchText}
            onChange={handleSearchTextChange}
          >
            <TextField.Slot>
              <SearchFilledIcon className={styles.searchIcon} />
            </TextField.Slot>
          </TextField.Root>
        </div>
      </div>

      <div className={styles.controlContainer}>
        <span className={styles.controlLabel}>
          Icon style
        </span>

        <div className={styles.control}>
          <Select.Root
            defaultValue={selectedStyle}
            onValueChange={onIconStyleChange}
          >
            <Select.Trigger className={styles.selectStyleTrigger} />
            <Select.Content>
              {
                styleNames.map(
                  styleName => {
                    const StyleIcon = styleIconByName[ styleName ];
                    return (
                      <Select.Item
                        key={styleName}
                        value={styleName}
                      >
                        <div className={styles.selectStyleItem}>
                          <StyleIcon className={styles.selectStyleIcon} />
                          <span className={styles.selectStyleLabel}>
                            {startCase(styleName)}
                          </span>
                        </div>
                      </Select.Item>
                    );
                  }
                )
              }
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <div className={styles.controlContainer}>
        <span className={styles.controlLabel}>
          Display color
        </span>

        <div className={styles.control}>
          <Select.Root
            defaultValue={selectedColor}
            onValueChange={onColorChange}
          >
            <Select.Trigger className={styles.selectColorTrigger} />
            <Select.Content>
              {
                colorNames.map(
                  colorName => {
                    const colorStyle = styles[ `selectColor${ startCase(colorName) }` ];
                    return (
                      <Select.Item
                        key={colorName}
                        value={colorName}
                      >
                        <div className={`${ styles.selectColorItem } ${ colorStyle }`}>
                          <span className={styles.selectColorLabel}>
                            {startCase(colorName)}
                          </span>
                        </div>
                      </Select.Item>
                    );
                  }
                )
              }
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </div>
  );
}
