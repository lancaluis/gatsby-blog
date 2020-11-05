import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"
import TranslationFlags from "../TranslationFlags"

import * as S from "./styled"

const Banner = ({ t }) => (
  <S.Wrapper>
    <p>{t("banner.phrase")}</p>
    <S.Version>v2.1.0</S.Version>
    <TranslationFlags />
  </S.Wrapper>
)

Banner.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Banner)
