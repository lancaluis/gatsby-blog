import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import { translate } from "../i18n/translate"

import * as S from "../styles/home"

const IndexPage = ({ t }) => (
  <Layout>
    <SEO
      title={t("home.titlePage")}
      description={t("home.descriptionPage")}
      url="https://luislanca.dev"
    />
    <S.Wrapper>
      Início
    </S.Wrapper>
  </Layout>
)

IndexPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(IndexPage)
