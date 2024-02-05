import styled,{css} from "styled-components/native";
import {MaterialIcons} from "@expo/vector-icons"
import { GasPump, Money } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;

  margin-top: 16px;
`
export const Text=  styled.Text`
  flex:1;
  margin-left: 5%;
 ${({ theme }) => css `
 
  font-size: ${ theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.ORANGE_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

`};
`;

export const IconGas = styled(GasPump).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.ORANGE_500,
}))``


export const IconMoney = styled(Money).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.ORANGE_500,
}))``
