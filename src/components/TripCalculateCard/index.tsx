import { Container, IconMoney, IconGas } from "./styles"
import { Text } from "./styles"

type Props = {
  title: string,
  value:string | number
}

export function TripCalculateCard({title,value}: Props) {

  return (
    <Container>
      <IconMoney/>
     <Text title={title}>{value}</Text>
      <IconGas/>
      <Text title={title}>{value}</Text>
    </Container>
  )
}
