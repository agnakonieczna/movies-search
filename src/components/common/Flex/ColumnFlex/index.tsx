import type { HTMLAttributes } from "react";
import styles from "./index.module.scss";

const ColumnFlex = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.column_flex} ${className}`} {...props} />;
};

export default ColumnFlex;
