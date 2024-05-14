import { type MouseEvent, useCallback, useState, useEffect } from 'react';
import { Theme } from '@radix-ui/themes';

import { BrowseSection } from './BrowseSection';
import { StylingSection } from './StylingSection';
import { UsageSection } from './UsageSection';

import npmUrl from './assets/npm.png';
import programmerUrl from './assets/programmer.webp';

import styles from './App.module.scss';

import 'highlight.js/scss/github.scss';
import 'highlight.js';

import '@radix-ui/themes/styles.css';
import { formatThousands } from 'utikity';
import { totalIconCount } from './iconInfo';
import { GitHubIcon } from './GitHubIcon';

const sectionMap = {
  usage: UsageSection,
  styling: StylingSection,
  browse: BrowseSection,
};

type SectionName = keyof typeof sectionMap;

const sectionNames: SectionName[] = [
  'usage',
  'styling',
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

  useEffect(
    () => {
      (document.querySelector('#root') as HTMLDivElement).style.visibility = 'visible';
      document.querySelector('.preloader')?.remove();
    },
    []
  );

  const CurrentSection = sectionMap[ currentSectionName ];

  return (
    <Theme
      className={styles.app}
      accentColor='indigo'
      grayColor='slate'
    >
      <h1 className={styles.title}>
        <span className={styles.titleNo}>
          no
        </span>
        <span className={styles.titleMuiIcons}>
          mui-icons
        </span>
      </h1>

      <a
        className={styles.npmLink}
        href="https://www.npmjs.com/search?q=no-mui-icons"
        target="_blank"
        title="no-mui-icons on npm"
      >
        <img
          className={styles.npmIcon}
          src={npmUrl}
          width={40}
          height={40}
        />
      </a>

      <a
        className={styles.githubLink}
        href="https://github.com/samuelneff/no-mui-icons"
        target="_blank"
        title="no-mui-icons on GitHub"
      >
        <GitHubIcon className={styles.githubIcon} />
      </a>

      <h2 className={styles.subtitle}>
        <span className={styles.subtitlePartOne}>
          All {formatThousands(totalIconCount) } icons from Material UI;
        </span>
        <span className={styles.subtitlePartTwo}>
          without the dependency on Material UI.
        </span>
      </h2>

      {/* <div className={styles.installBox}>
        <code>npm install no-mui-icons</code>
      </div> */}

      <nav className={styles.navBox}>
        {
          sectionNames.map(
            sectionName => (
              <div
                key={sectionName}
                className={`${ styles.navItem } ${ sectionName === currentSectionName ? styles.navItemCurrent : '' }`}
                data-section-name={sectionName}
                onClick={handleSectionClick}
              >
                {sectionName}
              </div>
            )
          )
        }
      </nav>

      <section className={styles.sectionContainer}>
        <CurrentSection />
      </section>

      <img
        className={styles.programmer}
        src={programmerUrl}
        width={800}
        height={800}
        alt="Background image of programmer"
      />

    </Theme>
  );
}

export default App
