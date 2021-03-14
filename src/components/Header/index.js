import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"
import SocialLinks from "../SocialLinks"
import Translation from "../Translation"

import * as S from "./styled"

const Header = ({ t }) => (
  <S.Wrapper>
    <Translation />
    <S.Brand>Luís Lança</S.Brand>
    <S.Line />
    <S.Navbar>
      <span role="img" aria-label="Pointer">📍 Jundiaí, BR</span>
      <S.Menu>
        <S.MenuLink to="/" activeClassName="active">
          {t("navbar.home")}
        </S.MenuLink>
        <S.MenuLink to="/about" activeClassName="active">
          {t("navbar.aboutMe")}
        </S.MenuLink>
        <S.MenuLink to="/projects" activeClassName="active">
          {t("navbar.projects")}
        </S.MenuLink>
        <S.MenuLink to="/blog" activeClassName="active">
          {t("navbar.blog")}
        </S.MenuLink>
      </ S.Menu>
      <SocialLinks />
    </S.Navbar>
    <S.Line />
  </S.Wrapper>
)

Header.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Header)
