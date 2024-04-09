import React from "react";

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

export type InheritedTypographyProps = Omit<TypographyProps, "italic" | "underline" | "tag" | "noWrap">;
