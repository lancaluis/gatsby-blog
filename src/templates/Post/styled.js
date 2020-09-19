import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const Header = styled.header`
  margin: auto;
  max-width: 50rem;
  text-align: center;
  padding: 1rem 2rem;
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 1.5rem;
  color: #ffd250;
  letter-spacing: 1px;
  line-height: 1.2;
`
export const Date = styled.time`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 0.8rem;
  margin-top: 1.5rem;
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
export const BackToBlog = styled.div`
  padding-left: 3rem;
  margin: 2rem 0;
  ${media.lessThan("medium")`
    margin: 2rem 0 1rem 0;
  `}
`
export const BackToBlogLink = styled(Link)`
  font-size: 0.9rem;
  color: #ffd250;
  text-decoration: none;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.8;
  }
`
export const Main = styled.section`
  margin: auto;
  max-width: 60rem;
  padding: 1rem 3rem;
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }
  p {
    margin: 0 auto 1.6rem;
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    border-radius: 3px;
    margin: 0;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: #fff;
    border-left: 0.2rem solid #ffd250;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    color: #fff;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 1.6rem 0;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  .skills-list {
    display: flex;
    justify-content: space-between;
    ${media.lessThan("medium")`
      flex-direction: column;
    `}
    p {
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;
    }
  }
  a {
    border-bottom: 1px dashed #ffd250;
    color: #ffd250;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
