import { TouchableOpacityProps } from "react-native"
import { Container, Titles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
}

export function Highlights({ title, ...rest }: Props) {
  return (
    <Container>
      <Titles>{title}</Titles>
    </Container>
  )
}
