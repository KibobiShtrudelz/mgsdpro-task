import clsx from "clsx"

import { Button } from "../button"
import { WaterLevel } from "../water-level"

import { useBathtub } from "./use-bathtub"

import styles from "./bathtub.module.scss"

export function Bathtub() {
  const {
    lastLevel,
    isFilling,
    isDraining,
    waterLevels,
    waterLevelsLength,
    displayWaterLevel,
    increaseWaterLevel,
    decreaseWaterLevel,
  } = useBathtub()

  return (
    <div className={styles.bathtubContainer}>
      <Button
        className={styles.button}
        disabled={isFilling || isDraining || waterLevelsLength === 5}
        onClick={increaseWaterLevel}
      >
        FILL WATER
      </Button>

      <div className={clsx(styles.bathtub)}>
        <div className={styles.text}>
          <span>{displayWaterLevel}</span>
        </div>

        {waterLevels.map((level) => (
          <WaterLevel
            key={level}
            isFilling={isFilling}
            isDraining={isDraining}
            isLast={level === lastLevel}
          />
        ))}
      </div>

      <Button
        className={styles.button}
        disabled={isFilling || isDraining || waterLevelsLength === 0}
        onClick={decreaseWaterLevel}
      >
        DRAINE WATER
      </Button>
    </div>
  )
}
