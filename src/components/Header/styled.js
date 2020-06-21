import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .active {
    color: #ffd250;
    text-decoration: line-through;
  }
`
export const MenuLink = styled(Link)`
  font-weight: 400;
  margin-left: 1rem;
  &:hover {
    color: #ffd250;
    transition: 0.3s;
  }
`
