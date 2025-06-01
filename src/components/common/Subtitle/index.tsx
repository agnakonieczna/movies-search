import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

const Subtitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={classNames(styles.subtitle, className)} {...props} />;
};

export default Subtitle;
