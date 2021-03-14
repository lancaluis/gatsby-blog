import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 1.66% 4em 1.66%;
  transition: color 0.3s;
  &:hover{
    color: #D5603F
  }
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h1`
  font-size: 1.5em;
  margin: 1em 0 0.5em 0;
  line-height: 1.2;
  font-weight: bold;
`
export const Description = styled.p`
  color: rgba(0,0,0,.54);
  font-size: 1em;
  margin-bottom: 1em;
  word-wrap: break-word;
  line-height: 1.2;
`
export const DateTime = styled.div`
  color: rgba(0,0,0,.54);
  font-size: 0.9em;
`
export const SubInfos = styled.div`
  display: flex;
`
export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
`
export const AuthorImage = styled(Img)`
  border-radius: 50%;
`
export const AuthorName = styled.p`
  color: #D5603F;
  font-weight: bold;
  margin-bottom: 0.5em;
`
