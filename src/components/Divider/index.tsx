import cn from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type DividerProps = React.PropsWithChildren;

const Divider = ({ children }: DividerProps) => {
  const classes = cn(styles.divider, children && styles.divider__with_text);

  return <div className={classes}>{children}</div>;
};

export default Divider;
