import styled,{css} from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`
export const Titles = styled.Text`
${({ theme })=> css`
  font-size: ${ theme.FONT_SIZE.SM}px;
  color: ${ theme.COLORS.RED};
  font-family: ${ theme.FONT_FAMILY.BOLD};
  margin-left: 5px;
  margin-bottom: -25px;
  margin-top: 20px;
  `}
`

