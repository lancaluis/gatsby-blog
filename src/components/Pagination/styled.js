import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.section`
  align-items: center;
  color: #ffd250;
  display: flex;
  padding-top: 5rem;
  justify-content: space-between;
  a {
    color: #ffd250;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
      opacity: 0.8;
    }
  }
  ${media.lessThan("medium")`
    padding: 1rem 3rem 0 3rem;
  `}
`
