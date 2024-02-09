import { TouchableOpacityProps } from "react-native"
import { Container, Titles } from "./styles"

type Props = TouchableOpacityProps & {
  error: string
}

export function Errors({ error }: Props) {
  return (
      <Titles>{error}</Titles>
 
  )
}
