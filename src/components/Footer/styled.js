import styled from "styled-components"

export const Wrapper = styled.footer`
  text-align: center;
`
export const Line = styled.hr`
  border-top: 1px solid #fafafa;
`
export const Phrase = styled.footer`
  color: #D5603F;
  font-family: "Amarante";
  font-size: 2.5em;
  margin: 1em 0 0.5em 0;
`
export const Author = styled.footer`
  font-family: "Amarante";
  font-size: 1.5em;
  margin-bottom: 2em;
`
export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  &:hover{
    color: #D5603F;
  }
`
