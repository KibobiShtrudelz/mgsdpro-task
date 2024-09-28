import { useEffect, useContext } from "react"

import { BathtubContext } from "@context"

const __DURATION__ = 2000

export function useBathtub() {
  const {
    isFilling,
    isDraining,
    waterLevels,
    setIsFilling,
    setIsDraining,
    setWaterLevels,
  } = useContext(BathtubContext)

  const waterLevelsLength = waterLevels.length

  const displayWaterLevel = () => {
    if (isFilling) {
      return waterLevelsLength * 20 + "px"
    }

    if (isDraining) {
      return (waterLevelsLength - 1) * 20 + "px"
    }

    if (!isFilling && !isDraining) {
      return waterLevelsLength === 5 ? "100px" : "0px"
    }

    return
  }

  useEffect(() => {
    if (isFilling) {
      let incrementWaterLevels: ReturnType<typeof setInterval>

      if (waterLevelsLength < 5) {
        incrementWaterLevels = setInterval(() => {
          setWaterLevels((prevLevels) => [...prevLevels, prevLevels.length + 1])
        }, __DURATION__)
      } else {
        setIsFilling(false)
      }

      return () => clearInterval(incrementWaterLevels)
    }

    if (isDraining) {
      let decrementWaterLevels: ReturnType<typeof setInterval>

      if (waterLevelsLength > 0) {
        decrementWaterLevels = setInterval(() => {
          setWaterLevels((prevLevels) =>
            prevLevels.slice(0, prevLevels.length - 1)
          )
        }, __DURATION__)
      } else {
        setIsDraining(false)
      }

      return () => clearInterval(decrementWaterLevels)
    }
  }, [
    isFilling,
    isDraining,
    waterLevelsLength,
    setIsFilling,
    setIsDraining,
    setWaterLevels,
  ])

  return {
    isFilling,
    isDraining,
    waterLevels,
    waterLevelsLength,
    lastLevel: waterLevelsLength,
    displayWaterLevel: displayWaterLevel(),
    increaseWaterLevel: () => setIsFilling(true),
    decreaseWaterLevel: () => setIsDraining(true),
  }
}
