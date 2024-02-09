import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`
export const Titles = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 5px;
  margin-bottom: -25px;
  margin-top: 20px;
`

