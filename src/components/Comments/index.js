import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import { translate } from "../../i18n/translate"

import { Wrapper, Title } from "./styled"

const Comments = ({ t, url, title }) => {
  const completeURL = `https://luislanca.dev${url}`

  return (
    <Wrapper>
      <Title>{t("post.comments")}</Title>
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
  t: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default translate(Comments)
