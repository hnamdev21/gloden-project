"use client";

import cn from "classnames";
import { InheritedTypographyProps } from "component";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  as: "button";
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: "a";
  href: string;
  children: React.ReactNode;
};

type ButtonVariant = "contained" | "outlined" | "link" | "tertiary" | "icon" | "text";
type ButtonColor = "primary" | "secondary" | "danger" | "warning" | "success" | "dark" | "light";
type ButtonSize = "xs" | "sm" | "base" | "md" | "lg";
type ButtonRounded = "square" | "circle" | "sm" | "base" | "md" | "lg" | "full" | "none";

type DefaultButtonProps = InheritedTypographyProps & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  rounded?: ButtonRounded;
};

type Props = (DefaultButtonProps & ButtonProps) | (DefaultButtonProps & LinkProps);

const Button = ({
  variant = "contained",
  color = "primary",
  size = "base",
  rounded = "square",
  fontSize = "base",
  textColor = "dark",
  weight = "base",
  textTransform = "none",
  textAlign = "left",
  children,
  className = "",
  ...props
}: Props) => {
  const classes = cn(
    "flex items-center justify-center align-middle",
    "cursor-pointer",
    styles.text,
    `${styles[`text__${fontSize}`]}`,
    `${styles[`text__${textColor}`]}`,
    `${styles[`text__weight__${weight}`]}`,
    `${styles[`text__${textTransform}`]}`,
    styles.button,
    `${styles[`button__${variant}`]}`,
    `${styles[`button__${variant}__${color}`]}`,
    `${styles[`button__${size}`]}`,
    `${styles[`button__rounded__${rounded}`]}`,
    className
  );

  if (props.as === "button") {
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  }

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
};

export default Button;
