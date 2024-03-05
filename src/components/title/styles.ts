import styled,{css} from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`
export const Titles = styled.Text`
${({ theme })=> css`
  font-size: ${ theme.FONT_SIZE.XL}px;
  color: ${ theme.COLORS.WHITE};
  font-family: ${ theme.FONT_FAMILY.BOLD};
  margin-left: 10px;
`}
`