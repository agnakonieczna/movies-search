import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

const Title = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 className={classNames(styles.title, className)} {...props} />;
};

export default Title;
