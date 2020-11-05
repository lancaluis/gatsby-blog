import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"

import * as S from "./styled"

const Header = ({ t }) => (
  <S.Wrapper>
    <S.Brand to="/">
      Luís <S.Span>{`{ Lança }`}</S.Span>
    </S.Brand>
    <S.NavBar>
      <S.MenuLink to="/" activeClassName="active">
        {t("navbar.home")}
      </S.MenuLink>
      <S.MenuLink to="/about" activeClassName="active">
        {t("navbar.aboutMe")}
      </S.MenuLink>
      <S.MenuLink to="/blog" activeClassName="active">
        {t("navbar.blog")}
      </S.MenuLink>
    </S.NavBar>
  </S.Wrapper>
)

Header.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Header)
