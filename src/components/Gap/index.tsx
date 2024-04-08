import cn from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type GapProps = {
  size?: "sm" | "base" | "md" | "lg" | "xl" | "2xl";
};

const Gap = ({ size = "base" }: GapProps) => {
  const classes = cn(styles.gap, `${styles[`gap__${size}`]}`);

  return <div className={classes} />;
};

export default Gap;
