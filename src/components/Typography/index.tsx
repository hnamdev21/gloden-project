import cn from "classnames";
import React from "react";

import styles from "./styles.module.scss";

// prettier-ignore
type FontColor = "info" | "danger" | "warning" | "success" | "primary" | "secondary" | "dark" | "light" | "white" | "black";
type FontSize = "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "6xl" | "10xl";
type FontWeight = "thin" | "base" | "md" | "bold" | "extrabold";
type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal" | "none";
type TextAlign = "left" | "center" | "right" | "justify";
type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TypographyProps = React.HTMLAttributes<HTMLHeadingElement> & {
  tag?: Tag;
  fontSize?: FontSize;
  textColor?: FontColor;
  weight?: FontWeight;
  textTransform?: TextTransform;
  textAlign?: TextAlign;
  italic?: boolean;
  underline?: boolean;
  noWrap?: boolean;
};

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
}: TypographyProps & { children: React.ReactNode }) => {
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
