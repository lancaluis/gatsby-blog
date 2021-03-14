import styled from "styled-components"

export const Wrapper = styled.section`
  padding: 3rem 3rem 0 3rem;

  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: #D5603F !important;
    }
  }
`

export const Title = styled.h2`
  color: #373640;
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 2rem;
`
