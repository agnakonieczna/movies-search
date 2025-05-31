import type { ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";

const Button = ({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={`${styles.button} ${className}`} {...props} />;
};

export default Button;
