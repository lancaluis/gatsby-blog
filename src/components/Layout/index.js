import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Footer from "../Footer"
import { translate } from "../../i18n/translate"

import GlobalStyles from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.Container>
      <GlobalStyles />
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default translate(Layout)
