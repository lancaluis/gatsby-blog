import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import { translate } from "../i18n/translate"

import {
  Wrapper,
  Description,
  Title,
  Text,
  Image,
} from "../styles/home"

const ProfileImage = () => {
  const { profileImage } = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "eu.png" }) {
        childImageSharp {
          fixed(width: 200, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Image fixed={profileImage.childImageSharp.fixed} />
}

const IndexPage = ({ t }) => (
  <Wrapper>
    <SEO title={t("home.titlePage")} description={t("home.descriptionPage")} url="https://luislanca.dev"/>
    <ProfileImage />
    <Description>
      <Title>{t("home.title")}</Title>
      <Text>{t("home.text")}</Text>
      <p>{t("home.followMe")}</p>
      <SocialLinks />
    </Description>
  </Wrapper>
)

IndexPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(IndexPage)
