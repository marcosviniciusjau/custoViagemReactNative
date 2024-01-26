import { CaretLeft } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container= styled.View `
  width:100%;

  flex-direction: row;

  align-items:center;
  justify-content:center;

  `

  export const Logo= styled.Image`
 
  `

  
export const BackButton = styled.TouchableOpacity`
  flex:1;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))``
