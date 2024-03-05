import styled,{css} from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Labels = styled.Text`
${({ theme })=> css`
  font-size: ${ theme.FONT_SIZE.LG}px;
  color: ${ theme.COLORS.WHITE};
  font-family: ${ theme.FONT_FAMILY.BOLD};
  margin-bottom: 13px;
  `}
`
export const Error = styled.Text`
${({ theme })=> css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.RED};
  font-family: ${theme.FONT_FAMILY.BOLD};
  margin-left: 5px;
  `}
`
