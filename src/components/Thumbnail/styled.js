import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const Wrapper = styled(Img)`
  width: 180px;
  height: 180px;
  border: solid 2px #fff;
  ${media.lessThan("medium")`
    display: none;
  `}
`
