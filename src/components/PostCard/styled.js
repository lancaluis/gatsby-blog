import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const Container = styled.div`
  flex-direction: column;
`
export const LinkWrapper = styled(Link)`
  display: flex;
  margin-top: 4rem;
  transition: color 0.5s;
  &:hover {
    color: #dadada;
  }
  ${media.lessThan("medium")`
    margin: 2rem 0 3rem 0;
  `}
`
export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
export const Thumbnail = styled.div`
  border: 2px solid #fff;
`
export const Infos = styled.div`
  margin: 0 2rem;
  flex-direction: column;
  max-width: 500px;
`
export const Date = styled.time`
  font-weight: 300;
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  p {
    margin-right: 1.3rem;
  }
`
export const Icon = styled.div`
  color: #ffd250;
  width: 16px;
  height: 16px;
  margin-right: 0.5rem;
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 1.5rem 0;
  color: #ffd250;
  letter-spacing: 1px;
  line-height: 1.2;
`
export const Description = styled.p`
  font-weight: 300;
  line-height: 1.4;
`
