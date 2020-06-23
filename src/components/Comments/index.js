import React from "react"
import PropTypes from "prop-types"

import ReactDisqusComments from "react-disqus-comments"

import { Wrapper, Title } from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://luislanca.dev${url}`

  return (
    <Wrapper>
      <Title>Comentários</Title>
      <ReactDisqusComments
        shortname="luislanca"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </Wrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
