import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.section`
  align-items: center;
  color: #D5603F;
  display: flex;
  padding-bottom: 2rem;
  justify-content: space-around;
  a {
    color: #D5603F;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
      opacity: 0.8;
    }
  }
  ${media.lessThan("medium")`
    padding: 5rem 3rem 0 2rem;
  `}
`
