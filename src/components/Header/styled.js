import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`

export const Language = styled.p`
  text-align: right;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s;
  &:hover {
    color: #D5603F;
  }
`

export const Brand = styled(Link)`
  font-size: 5rem;
  color: #D5603F;
  text-align: center;
  margin: 0.5em 0;
  font-family: "Amarante";
`

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.3rem 0;
`

export const Menu = styled.nav`
  display: flex;
  .active {
    color: #D5603F;
    text-decoration: underline;
  }
`

export const MenuLink = styled(Link)`
  font-weight: 400;
  margin: 0 1rem;
  &:hover {
    color: #D5603F;
    transition: 0.3s;
  }
`
export const Line = styled.hr`
  width: 100%;
  border-top: 1px solid #fafafa;
`
