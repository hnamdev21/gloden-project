"use client";

import cn from "classnames";
import React from "react";

import { CloseEyeIcon, OpenEyeIcon } from "@/components/Icons";
import { TypographyProps } from "@/components/Typography";

import styles from "./styles.module.scss";

// prettier-ignore
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & Omit<TypographyProps, "italic" | "underline"> & {
    type?: "text" | "email" | "number" | "date" | "datetime-local" | "hidden";
    sizeElement?: "sm" | "base" | "md" | "lg";
    width?: "full" | "auto";
    error?: boolean;
  };

const TextInputComponent = (
  {
    type = "text",
    sizeElement = "base",
    width = "full",
    error = false,
    fontSize = "base",
    textColor = "dark",
    weight = "base",
    textTransform = "none",
    textAlign = "left",
    children,
    className = "",
    ...props
  }: InputProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  const classes = cn(
    styles.text,
    `${styles[`text__${fontSize}`]}`,
    `${styles[`text__${textColor}`]}`,
    `${styles[`text__weight__${weight}`]}`,
    `${styles[`text__${textTransform}`]}`,
    `${styles[`text__${textAlign}`]}`,
    styles.input,
    `${styles[`input__${sizeElement}`]}`,
    `${styles[`input__${width}`]}`,
    error && styles.error,
    className
  );

  return <input type={type} {...props} className={classes} ref={ref} />;
};

type InputPasswordProps = InputProps & {
  type?: "password";
};

TextInputComponent.Password = function InputPasswordComponent(
  {
    sizeElement = "base",
    width = "full",
    error = false,
    fontSize = "base",
    textColor = "dark",
    weight = "base",
    textTransform = "none",
    textAlign = "left",
    children,
    className = "",
    ...props
  }: InputPasswordProps,
  ref?: React.Ref<HTMLInputElement>
) {
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);

  const classes = cn(
    styles.text,
    `${styles[`text__${fontSize}`]}`,
    `${styles[`text__${textColor}`]}`,
    `${styles[`text__weight__${weight}`]}`,
    `${styles[`text__${textTransform}`]}`,
    `${styles[`text__${textAlign}`]}`,
    styles.input,
    `${styles[`input__${sizeElement}`]}`,
    `${styles[`input__${width}`]}`,
    error && styles.error,
    className
  );

  return (
    <div className={styles.fieldContainer}>
      <input {...props} type={isShowPassword ? "text" : "password"} className={classes} ref={ref} />
      <span className={`${styles.eyeIconContainer}`} onClick={() => setIsShowPassword(!isShowPassword)}>
        {isShowPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
      </span>
    </div>
  );
};
TextInputComponent.displayName = "TextInput";

const PasswordInputRef = React.forwardRef<HTMLInputElement, InputPasswordProps>(TextInputComponent.Password);
export const PasswordInput = React.memo(PasswordInputRef);

const TextInputRef = React.forwardRef<HTMLInputElement, InputProps>(TextInputComponent);
const TextInput = React.memo(TextInputRef);

export default TextInput;
