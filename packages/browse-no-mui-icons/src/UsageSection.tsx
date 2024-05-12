import { ThumbUpFilledIcon } from 'no-mui-icons-filled';
import { EmailSharpIcon } from 'no-mui-icons-sharp';

import styles from './UsageSection.module.css';

export function UsageSection() {
  return (
    <>
      <ThumbUpFilledIcon />
      <EmailSharpIcon className={styles.iconInfo} />
    </>
  );
}
