import cn from "classnames";
import { TypographyProps } from "component";
import React from "react";

import styles from "./styles.module.scss";

const Typography = ({
  tag: Tag = "p",
  fontSize = "base",
  textColor = "dark",
  weight = "base",
  textTransform = "none",
  textAlign = "left",
  italic = false,
  underline = false,
  noWrap = false,
  className = "",
  children,
  ...props
}: TypographyProps) => {
  const TagName = Tag;
  const classes = cn(
    styles.text,
    `${styles[`text__${fontSize}`]}`,
    `${styles[`text__${textColor}`]}`,
    `${styles[`text__weight__${weight}`]}`,
    `${styles[`text__${textTransform}`]}`,
    `${styles[`text__${textAlign}`]}`,
    italic && styles["text__italic"],
    underline && styles["text__underline"],
    noWrap && styles["text__nowrap"],
    className
  );

  return (
    <TagName {...props} className={classes}>
      {children}
    </TagName>
  );
};

export default Typography;
