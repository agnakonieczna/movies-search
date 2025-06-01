import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';

const EmptyView = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={styles.container} {...props}>
      <img
        className={styles.img}
        src={'/images/sad-face.svg'}
        alt="sad-face-icon"
      />
      {children}
    </div>
  );
};

export default EmptyView;
