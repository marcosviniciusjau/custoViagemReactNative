import styled,{css} from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Titles = styled.Text`
${({ theme })=> css`
  text-align:center;
  font-size: ${ theme.FONT_SIZE.XL}px;
  color: ${ theme.COLORS.WHITE};
  font-family: ${ theme.FONT_FAMILY.BOLD};
  `}
`

export const Subtitles = styled.Text`
${({ theme })=> css`
  text-align: center;
  font-size: ${ theme.FONT_SIZE.MD}px;
  color: ${ theme.COLORS.GRAY_300};
  font-family: ${ theme.FONT_FAMILY.REGULAR};
  `}
`