import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const Wrapper = styled(Img)`
  min-width: 180px;
  min-height: 180px;
  border: solid 2px #fff;
  ${media.lessThan("medium")`
    margin: 0 2rem 2rem 2rem;
  `}
`
