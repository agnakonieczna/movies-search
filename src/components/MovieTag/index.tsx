import type { HTMLAttributes } from "react";
import styles from "./index.module.scss";

const MovieTag = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.tag} ${className}`} {...props} />;
};

export default MovieTag;
