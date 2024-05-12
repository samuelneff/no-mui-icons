import { HTMLAttributes } from 'react';

import styles from './CodeTitle.module.scss';

export function CodeTitle({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${ styles.codeTitle } ${ className ?? '' }`}
      {...divProps}
    />
  );
}