import type { HTMLAttributes } from "react";
import styles from "./index.module.scss";

const Title = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 className={`${styles.title} ${className}`} {...props} />;
};

export default Title;
