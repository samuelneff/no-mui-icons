import { HTMLAttributes } from 'react';
import styles from './InlineCode.module.scss';

export function InlineCode({ className, ...codeProps }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <code className={`${ styles.inlineCode } ${ className } nohighlight`} {...codeProps} />
  );
}