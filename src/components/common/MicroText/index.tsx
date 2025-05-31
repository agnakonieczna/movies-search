import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';

const MicroText = ({
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={`${styles.micro_text} ${className}`} {...props} />;
};

export default MicroText;
