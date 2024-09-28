import { useState, createContext, PropsWithChildren } from "react"

import { BathtubContextProps } from "./model"

export const BathtubContext = createContext<BathtubContextProps>(
  {} as BathtubContextProps
)

export const BathtubProvider = ({ children }: PropsWithChildren) => {
  const [isFilling, setIsFilling] = useState(false)
  const [isDraining, setIsDraining] = useState(false)
  const [waterLevels, setWaterLevels] = useState<number[]>([])

  return (
    <BathtubContext.Provider
      value={{
        isFilling,
        isDraining,
        waterLevels,
        setIsFilling,
        setIsDraining,
        setWaterLevels,
      }}
    >
      {children}
    </BathtubContext.Provider>
  )
}
