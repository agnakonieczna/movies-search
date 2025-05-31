import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';

const Text = ({
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={`${styles.text} ${className}`} {...props} />;
};

export default Text;
