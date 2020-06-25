import React from "react"
import PropTypes from "prop-types"

import { translate } from "../i18n/translate"
import SEO from "../components/seo"

const NotFoundPage = ({ t }) => (
  <>
    <SEO title={t("notFound.message")}  description={t("notFound.description")}/>
    <p>Not found</p>
  </>
)

NotFoundPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(NotFoundPage)
