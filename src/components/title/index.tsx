import { TouchableOpacityProps } from "react-native"
import { Titles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
}

export function Title({ title, ...rest }: Props) {
  return (
      <Titles>{title}</Titles>
  
  )
}
