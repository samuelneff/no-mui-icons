import { MouseEvent } from 'react';

import styles from './App.module.scss';
import { UseSection } from './UseSection';
import { StyleSection } from './StyleSection';
import { BrowseSection } from './BrowseSection';
import { useCallback, useState } from 'react';

const sectionMap = {
  use: UseSection,
  style: StyleSection,
  browse: BrowseSection,
};

type SectionName = keyof typeof sectionMap;

const sectionNames: SectionName[] = [
  'use',
  'style',
  'browse',
];

function App() {
  const [ currentSectionName, setCurrentSectionName ] = useState(sectionNames[ 0 ]);

  const handleSectionClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const { sectionName } = (event.target as HTMLDivElement).dataset;
      setCurrentSectionName(sectionName as SectionName);
    },
    []
  );

  const CurrentSection = sectionMap[ currentSectionName ];

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>
        <span className={styles.titleNo}>
          no
        </span>
        <span className={styles.titleMuiIcons}>
          mui-icons
        </span>
      </h1>

      <h2 className={styles.subtitle}>
        <span className={styles.subtitlePartOne}>
          All the icons from Material UI;
        </span>
        <span className={styles.subtitlePartTwo}>
          without the dependency on Material UI.
        </span>
      </h2>

      <div className={styles.installBox}>
        <code>npm install no-mui-icons</code>
      </div>

      <nav className={styles.navBox}>
        {
          sectionNames.map(
            sectionName => (
              <div
                key={sectionName}
                className={`${ styles.navItem } ${ sectionName === currentSectionName ? styles.navItemCurrent : ''}`}
                data-section-name={sectionName}
                onClick={handleSectionClick}
              >
                { sectionName }
              </div>
            )
          )
        }
      </nav>

      <section className={styles.sectionContainer}>
        <CurrentSection />
      </section>

    </div>
  );
}

export default App
