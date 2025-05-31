import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';

const SmallText = ({
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={`${styles.small_text} ${className}`} {...props} />;
};

export default SmallText;
