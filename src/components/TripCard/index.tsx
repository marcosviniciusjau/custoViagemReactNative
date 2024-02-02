import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles';
import { Icon } from '@components/TripDetailCard/styles';
import { Button } from '@components/button';

type Props = TouchableOpacityProps & {
  title: string;
  onRemove:()=>void;
}
 
export function TripCard({ title, onRemove,...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon name="airplanemode-active" />
      <Title>{title}</Title>
      <Button title="excluir" onPress={onRemove}></Button>
    </Container>
  )
}
