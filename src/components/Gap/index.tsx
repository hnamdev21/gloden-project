import cn from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type GapProps = {
  size: "sm" | "base" | "lg";
};

const Gap = ({ size }: GapProps) => {
  const classes = cn(styles.gap, `${styles[`gap__${size}`]}`);

  return <div className={classes} />;
};

export default Gap;
