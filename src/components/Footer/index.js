import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"

import * as S from "./styled"

const Footer = ({ t }) => {
  return (
    <S.Wrapper>
      <S.Line />
      <S.Phrase>"{t("footer.phrase")}"</S.Phrase>
      <S.Author>{t("footer.author")}</S.Author>
    </S.Wrapper>
  )
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Footer)
