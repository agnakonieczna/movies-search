import type { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={classNames(styles.button, className)} {...props} />;
};

export default Button;
