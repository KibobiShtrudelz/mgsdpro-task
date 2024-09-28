import { PropsWithChildren } from "react"

import clsx from "clsx"

import { type ButtonProps } from "./model"

import styles from "./button.module.scss"

export function Button({
  children,
  disabled,
  className,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={clsx(styles.button, className, disabled && styles.disabled)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
