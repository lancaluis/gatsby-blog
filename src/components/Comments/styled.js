import styled from "styled-components"

export const Wrapper = styled.section`
  padding: 3rem 3rem 0 3rem;

  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: #ffd250 !important;
    }
  }
`

export const Title = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 2rem;
`
