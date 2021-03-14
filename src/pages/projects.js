import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import { translate } from "../i18n/translate"

import * as S from "../styles/about"

const ProjectsPage = ({ t }) => (
  <Layout>
    <SEO
      title={t("about.titlePage")}
      description={t("about.descriptionPage")}
      url="https://luislanca.dev/projects"
    />
    <S.Wrapper>
      Projetos
    </S.Wrapper>
  </Layout>
)

ProjectsPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(ProjectsPage)

