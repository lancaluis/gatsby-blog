import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.footer`
  text-align: center;
  margin: 5rem 1rem 2rem 1rem;
  ${media.lessThan("medium")`
    margin: 3rem 1rem 2rem 1rem;
  `}
`
