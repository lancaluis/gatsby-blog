import React from "react"
import PropTypes from "prop-types"
import { Gatsby, Reactjs } from "@styled-icons/remix-line"

import { translate } from "../../i18n/translate"

import { Wrapper } from "./styled"

const Footer = ({ t }) => (
  <Wrapper>
    <p>
      {new Date().getFullYear()} &copy; Developed by me. Eat fries{" "}
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
