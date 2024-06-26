import cn from "classnames";
import { InheritedTypographyProps } from "component";
import React from "react";

import styles from "./styles.module.scss";

// prettier-ignore
type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & InheritedTypographyProps & {
  htmlFor: string;
  required?: boolean;
}

function Label({
  fontSize = "base",
  textColor = "dark",
  weight = "base",
  textTransform = "none",
  textAlign = "left",
  required = false,
  htmlFor,
  children,
  className = "",
  ...props
}: LabelProps) {
  const classes = cn(
    "block",
    styles.text,
    `${styles[`text__${fontSize}`]}`,
    `${styles[`text__${textColor}`]}`,
    `${styles[`text__weight__${weight}`]}`,
    `${styles[`text__${textTransform}`]}`,
    `${styles[`text__${textAlign}`]}`,
    className
  );

  return (
    <label htmlFor={htmlFor} {...props} className={classes}>
      {children}
      {required && <span className="text-red-500 ml-[.4rem]">*</span>}
    </label>
  );
}

export default Label;
