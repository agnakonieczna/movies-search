import type { HTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

const MicroText = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={classNames(styles.micro_text, className)} {...props} />;
};

export default MicroText;
