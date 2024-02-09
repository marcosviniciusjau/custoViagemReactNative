import { TouchableOpacityProps } from "react-native"
import { Container,Subtitles, Titles } from "./styles"

import { ErrorHome } from "src/error_home"

type Props = TouchableOpacityProps & {
  title: string
  subtitle: string
  error:string
}

export function Highlights({ title,subtitle, error }: Props) {
  return (
    <Container>
      <Titles>{title}</Titles>
      <Subtitles>{subtitle}</Subtitles>
      <ErrorHome error={error}></ErrorHome>
    </Container>
  )
}
