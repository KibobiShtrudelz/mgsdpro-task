export type BathtubContextProps = {
  isFilling: boolean
  isDraining: boolean
  waterLevels: number[]
  setIsFilling: React.Dispatch<React.SetStateAction<boolean>>
  setIsDraining: React.Dispatch<React.SetStateAction<boolean>>
  setWaterLevels: React.Dispatch<React.SetStateAction<number[]>>
}
