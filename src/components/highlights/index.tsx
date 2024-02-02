import { TouchableOpacityProps } from "react-native"
import { Container,Subtitles, Titles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
  subtitle: string
}

export function Highlights({ title,subtitle, ...rest }: Props) {
  return (
    <Container>
      <Titles>{title}</Titles>
      <Subtitles>{subtitle}</Subtitles>
    </Container>
  )
}
