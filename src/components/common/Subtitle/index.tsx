import type { HTMLAttributes } from "react";
import styles from "./index.module.scss";

const Subtitle = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={`${styles.subtitle} ${className}`} {...props} />;
};

export default Subtitle;
