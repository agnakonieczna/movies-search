import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

const SmallText = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={classNames(styles.small_text, className)} {...props} />;
};

export default SmallText;
