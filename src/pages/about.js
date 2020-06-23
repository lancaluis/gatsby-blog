import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import { translate } from "../i18n/translate"

const AboutPage = ({ t }) => (
  <>
    <SEO title="About me" />
  </>
)

AboutPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(AboutPage)
