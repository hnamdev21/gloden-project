"use client";

import cn from "classnames";
import Link from "next/link";
import React from "react";

import { TypographyProps } from "../Typography";
import styles from "./styles.module.scss";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  as?: "button";
  children: React.ReactNode;
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
  children: React.ReactNode;
};

type ButtonVariant = "contained" | "outlined" | "text";
type ButtonColor = "primary" | "secondary" | "danger" | "warning" | "success";
type ButtonSize = "sm" | "base" | "md" | "lg";
type ButtonShape = "square" | "rectangle" | "circle";

type DefaultButtonProps = Omit<TypographyProps, "italic" | "underline"> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  shape?: ButtonShape;
};

type Props = (DefaultButtonProps & ButtonProps) | (DefaultButtonProps & LinkProps);

const Button = ({
  variant = "contained",
  color = "primary",
  size = "base",
  shape = "rectangle",
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
    styles.text,
    `${styles[`text__${fontSize}`]}`,
    `${styles[`text__${textColor}`]}`,
    `${styles[`text__${weight}`]}`,
    `${styles[`text__${textTransform}`]}`,
    `${styles[`text__${textAlign}`]}`,
    styles.button,
    `${styles[`button__${variant}`]}`,
    `${styles[`button__${color}`]}`,
    `${styles[`button__${size}`]}`,
    `${styles[`button__${shape}`]}`,
    className
  );

  if (props.as === "a") {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
