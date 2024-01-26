import { TouchableOpacityProps } from "react-native"
import { Container, Labels } from "./styles"

type Props = TouchableOpacityProps & {
  label: string
}

export function Label({ label, ...rest }: Props) {
  return (
   
      <Labels>{label}</Labels>
  )
}
