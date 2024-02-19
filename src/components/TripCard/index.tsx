import { TouchableOpacityProps } from 'react-native'
import { Container, Title,Icon } from './styles';

import { ButtonIcon } from '@components/ButtonIcon';

type Props = TouchableOpacityProps & {
  title: string;
  onRemove:()=>void;
}
 
export function TripCard({ title, onRemove,...rest}: Props) {
  return (
    <Container {...rest}>
       <ButtonIcon icon="trip-origin" />
      <Title>{title}</Title>
      <ButtonIcon icon="delete" type="SECONDARY" onPress={onRemove} />
      
    </Container>
  )
}
