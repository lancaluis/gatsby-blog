import styled from "styled-components"

export const Links = styled.ul`
  display: flex;
  list-style: none;
`
export const Link = styled.a`
  color: #373640;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #D5603F;
  }
`
export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 0.5rem;
`
