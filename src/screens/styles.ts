import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";
export const Container= styled.View`
  flex:1;
  background-color:${({theme})=> theme.COLORS.GRAY_400};
  padding:14px;
`;

export const NativeInput = styled.TextInput`
  flex: 1;
  max-height: 56px;
  min-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-width: 0px;

  border-radius: 6px;
  padding: 16px;
  margin-bottom: 32px;
`
