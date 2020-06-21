import React from "react"
import PropTypes from "prop-types"

import Banner from "../Banner"
import Header from "../Header"
import Footer from "../Footer"
import { translate } from "../../i18n/translate"

import GlobalStyles from "../../styles/global"
import { Container, Main } from "./styled"

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Banner />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default translate(Layout)
