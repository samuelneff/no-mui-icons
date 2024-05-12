import { HTMLAttributes } from 'react';
import styles from './CodeExplanation.module.scss';

export function CodeExplanation({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${ styles.codeExplanation } ${ className }`}
      {...divProps}
    />
  );
}
