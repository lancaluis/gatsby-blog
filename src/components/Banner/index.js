import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"
import TranslationFlags from "../TranslationFlags"

import { Wrapper, Phrase, Version } from "./styled"

const Banner = ({ t }) => (
  <Wrapper>
    <p>{t("banner.phrase")}</p>
    <Version>v2.0.0</Version>
    <TranslationFlags />
  </Wrapper>
)

Banner.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Banner)
