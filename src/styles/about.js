import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${media.lessThan("medium")`
    flex-direction: column;
    margin: 0 2rem;
  `}
`