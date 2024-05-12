import { ThumbUpFilledIcon } from 'no-mui-icons-filled';
import { EmailSharpIcon } from 'no-mui-icons-sharp';

import styles from './UseSection.module.css';

export function UseSection() {
  return (
    <>
      <ThumbUpFilledIcon />
      <EmailSharpIcon className={styles.iconInfo} />
    </>
  );
}
