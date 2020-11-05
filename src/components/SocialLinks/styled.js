import styled from "styled-components"

export const Links = styled.ul`
  display: flex;
  list-style: none;
`
export const Link = styled.a`
  color: #ffd250;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #fff;
  }
`
export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin: 1rem 1rem 0 0;
`
