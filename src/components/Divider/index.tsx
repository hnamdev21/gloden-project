import cn from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type DividerProps = React.PropsWithChildren & {
  className?: string;
  vertical?: boolean;
};

const Divider = ({ vertical = false, className = "", children }: DividerProps) => {
  const classes = cn(
    styles.divider,
    {
      [styles.divider__vertical]: vertical,
      [styles.divider__horizontal]: !vertical,
      [styles.divider__with_text]: children !== undefined,
    },
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Divider;
