import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string
}

export function TripCard({ title, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}
