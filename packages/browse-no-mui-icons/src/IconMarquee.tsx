import { useRef } from 'react';
import * as filledIcons from 'no-mui-icons-filled';


import styles from './IconMarquee.module.scss';
import { randomBelow } from 'utikity';
import { filledIconNames } from './iconInfo';

export function IconMarquee() {

  const iconList = useRef(randomStartIconList());


  return (
    <div className={styles.iconMarqueeOuterContainer}>
      <div className={styles.iconMarqueeInnerContainer}>
        {
          iconList.current.map(
            Icon => (
              <Icon className={styles.iconMarqueeIcon} />
            )
          )
        }
      </div>
    </div>
  );
}

function randomStartIconList() {
  const offset = randomBelow(filledIconNames.length);
  const randomStartList = filledIconNames.slice(offset).concat(filledIconNames.slice(0, offset));
  return randomStartList.map(name => filledIcons[ name as keyof typeof filledIcons ]);
}
