import { GasPump, MapPin, Money } from "phosphor-react-native"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`
export const Containers = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: center;
`

export const NativeInput = styled.TextInput`
  flex: 1;
  max-height: 56px;
  min-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-width: 0px;

  border-radius: 6px;
  padding: 16px;
  margin-bottom: 32px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const IconGas = styled(GasPump).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))``

export const IconMap = styled(MapPin).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))``

export const IconMoney = styled(Money).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))``
