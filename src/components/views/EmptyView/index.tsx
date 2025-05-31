import type { HTMLAttributes } from "react";
import { ColumnFlex } from "../../common";
import styles from "./index.module.scss";

const EmptyView = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <ColumnFlex {...props}>
      <img
        className={styles.img}
        src={"src/assets/sad-face.svg"}
        alt="sad-face-icon"
      />
      {children}
    </ColumnFlex>
  );
};

export default EmptyView;
