import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

const MovieTag = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={classNames(styles.tag, className)} {...props} />;
};

export default MovieTag;
