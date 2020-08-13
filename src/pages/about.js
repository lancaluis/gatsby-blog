import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import { translate } from "../i18n/translate"

const AboutPage = ({ t }) => (
  <Layout>
    <SEO
      title={t("about.titlePage")}
      description={t("about.descriptionPage")}
      url="https://luislanca.dev/about"
    />
  </Layout>
)

AboutPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(AboutPage)
