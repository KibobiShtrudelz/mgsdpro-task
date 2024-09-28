import clsx from "clsx"

import { WaterLevelProps } from "./model"

import styles from "./water-level.module.scss"

export function WaterLevel({ isLast, isFilling, isDraining }: WaterLevelProps) {
  return (
    <div
      className={clsx(
        styles.waterLevel,
        isFilling && styles.increase,
        isLast && isDraining && styles.decrease
      )}
    />
  )
}
