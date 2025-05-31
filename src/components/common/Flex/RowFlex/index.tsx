import type { HTMLAttributes } from "react";
import styles from "./index.module.scss";

const RowFlex = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.row_flex} ${className}`} {...props} />;
};

export default RowFlex;
