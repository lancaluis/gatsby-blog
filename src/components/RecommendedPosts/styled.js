import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.section`
  display: flex;
`
export const RecommendedLink = styled(Link)`
  align-items: center;
  color: #ffd250;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: opacity 0.5s;
  width: 50%;
  &:hover {
    opacity: 0.8;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
