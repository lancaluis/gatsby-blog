import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import { translate } from "../i18n/translate"

import * as S from "../styles/about"

const AboutPage = ({ t }) => (
  <Layout>
    <SEO
      title={t("about.titlePage")}
      description={t("about.descriptionPage")}
      url="https://luislanca.dev/about"
    />
    <S.Wrapper>
      Sobre
    </S.Wrapper>
  </Layout>
)

AboutPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(AboutPage)

