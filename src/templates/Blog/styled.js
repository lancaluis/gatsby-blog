import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Posts = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
export const SearchBar = styled.div`

`
export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1.6% 3em 1.6%;
`
export const PageTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 2em;
  &:after {
    content: "";
    border-top: solid 4px #D5603F;
    width: 100px;
  }
`
