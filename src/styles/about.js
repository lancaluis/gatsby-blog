import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const Project = styled.a`
  margin: 3rem 0 0 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;  
  line-height: 1.4;
  ${media.lessThan("medium")`
    margin: 0 2rem;
  `}
`

export const Image = styled(Img)`
  border: #fff 2px solid;
  ${media.lessThan("medium")`
    margin: 2rem 0;
  `}
`

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 500;
  margin-top: 5rem;
  ${media.lessThan("medium")`
    margin-top: 3rem;
  `}
`

export const ProjectTitle = styled.p`
  display: inline-block;
  color: #ffd250;
  font-size: 1.5rem;
  font-weight: 500;
  border-bottom: 1px dashed #ffd250;
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 1rem 0;
  line-height: 1.4;
  ${media.lessThan("medium")`
    line-height: 1.6;
  `}
`
export const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 2rem 0 2.5rem 0;
  ${media.lessThan("medium")`
    line-height: 1.6;
  `}
`

export const Tech = styled.p`
  display: inline-block;
  color: #ffd250; 
  background: #292329;
  padding: 0.3rem;
  margin: 0.5rem 1rem 0 0;
  font-size: 0.8rem;
  font-weight: 300;
  border-radius: 2px;
`
export const Mail = styled.a`
  color: #ffd250;
  border-bottom: 1px dashed #ffd250;
`
