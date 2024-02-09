
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
   
}

export function ButtonIcon({...rest}: Props) {
  return (
      <Container {...rest}>
        <Icon name="delete" type="SECONDARY" />
      </Container>
  )
}