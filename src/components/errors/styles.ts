import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`
export const Titles = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 1px;
  margin-bottom: 10px;
  margin-top: -12px;
`
