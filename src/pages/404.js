import React from "react"
import PropTypes from "prop-types"

import { translate } from "../i18n/translate"
import SEO from "../components/seo"

const NotFoundPage = ({ t }) => (
  <>
    <SEO title={t("notFound.message")} />
    <p>oi</p>
  </>
)

NotFoundPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(NotFoundPage)
