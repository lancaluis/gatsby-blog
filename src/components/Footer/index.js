import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"

import * as S from "./styled"

const Footer = ({ t }) => (
  <S.Wrapper>
    <p>
      {new Date().getFullYear()} &copy; {t("footer.copy")}{" "}
      <span role="img" aria-label="Fries">
        🍟
      </span>
    </p>
  </S.Wrapper>
)

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Footer)
