import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"
import TranslationFlags from '../TranslationFlags'

import { Wrapper, Phrase } from "./styled"

const Banner = ({ t }) => (
  <Wrapper>
    <Phrase>{t("banner.phrase")}</Phrase>
    <p>v2.0.0</p>
    <TranslationFlags/>
  </Wrapper>
)

Banner.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Banner)
