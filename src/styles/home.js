import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${media.lessThan("medium")`
    flex-direction: column;
    margin: 0 2rem;
  `}
`
export const Description = styled.div`
  margin-left: 4rem;
  max-width: 500px;
  ${media.lessThan("medium")`
    margin-left: 0;
  `}
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`
export const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 1.5rem 0 2.5rem 0;
  line-height: 1.4;
`
export const TextBold = styled.p`
  font-size: 1rem;
  font-weight: 500;
`
export const Image = styled(Img)`
  border-radius: 3px;
  ${media.lessThan("medium")`
    margin: 2rem 0;
  `}
`
