import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 4rem 2rem 0 2rem;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`
export const Infos = styled.div`
  margin-left: 2rem;
  width: 70%;
  ${media.lessThan("medium")`
    margin: 0;
    width: 100%;
  `}
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
  ${media.lessThan("medium")`
    line-height: 1.2;
  `}
`
export const Description = styled.p`
  font-weight: 300;
  ${media.lessThan("medium")`
    line-height: 1.4;
  `}
`
