import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import { translate } from "../../i18n/translate"

import * as S from "./styled"

const Comments = ({ t, url, title }) => {
  const completeURL = `https://luislanca.dev${url}`

  return (
    <S.Wrapper>
      <S.Title>{t("post.comments")}</S.Title>
      <ReactDisqusComments
        shortname="luislanca"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.Wrapper>
  )
}

Comments.propTypes = {
  t: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default translate(Comments)
