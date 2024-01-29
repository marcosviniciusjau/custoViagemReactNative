import { Double } from 'react-native/Libraries/Types/CodegenTypes'
import {Container,Icon, Text} from './styles'

type Props = {
  origin: string
  destiny: string
  distance: Double
  efficiency: Double
  fuel: Double
  local: string
  tall: string
}

export function tripDetailCard({origin,destiny,distance,efficiency,fuel,local,tall}: Props){
  return (
    <Container>
      <Icon name="person" />
      <Text>Origem: {origin}</Text>
      <Text>Destino: {destiny}</Text>
      <Text>Distancia{distance}</Text>
      <Text>Eficiencia{efficiency}</Text>
      <Text>Preco Combustivel{fuel}</Text>
      <Text>Local do pedagio{local}</Text>
      <Text>Preco do pedagio{tall}</Text>
    </Container>
  )
}