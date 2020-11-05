import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #373640;
  padding: 0.2rem 1.5rem;
  font-size: 0.8rem;
`

export const Version = styled.p`
  ${media.lessThan("medium")`
   display: none;
  `}
`
