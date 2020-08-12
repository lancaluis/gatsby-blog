import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"

import { Wrapper } from "./styled"

const Footer = ({ t }) => (
  <Wrapper>
    <p>
      {new Date().getFullYear()} &copy; {t("footer.copy")}{" "}
      <span role="img" aria-label="Fries">
        🍟
      </span>
    </p>
  </Wrapper>
)

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Footer)
