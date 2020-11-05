import React from "react"
import PropTypes from "prop-types"

import { translate } from "../i18n/translate"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = ({ t }) => (
  <Layout>
    <SEO
      title={t("notFound.message")}
      description={t("notFound.description")}
    />
    <p>{t("notFound.message")}</p>
  </Layout>
)

NotFoundPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(NotFoundPage)
