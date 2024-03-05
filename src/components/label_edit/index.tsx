import { TouchableOpacityProps } from "react-native"
import { Labels } from "./styles"

type Props = TouchableOpacityProps & {
  label: string
}

export function LabelEdit({ label}: Props) {
  return (
    <>
      <Labels>{label}</Labels>
    </>
  )
}
