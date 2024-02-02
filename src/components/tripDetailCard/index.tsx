import { Container, Icon } from "./styles"
import { Text } from "./styles"

type Props = {
  title: string,
  value:string | number
}

export function TripDetailCard({title,value}: Props) {

  return (
    <Container>
      <Icon name="airplanemode-active" />
      <Text title={title}>{value}</Text>
    </Container>
  )
}
