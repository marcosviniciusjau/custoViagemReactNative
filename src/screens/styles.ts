import styled from "styled-components/native";

export const Container= styled.View`
  flex:1;
  background-color:${({theme})=> theme.COLORS.GRAY_400};
  padding:14px;
  justify-content:center
`;
