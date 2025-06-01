import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

const Text = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={classNames(styles.text, className)} {...props} />;
};

export default Text;
