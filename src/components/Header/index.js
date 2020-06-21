import React from "react"
import PropTypes from "prop-types"

import { translate } from "../../i18n/translate"

import { Wrapper, NavBar, MenuLink } from "./styled"

const Header = ({ t }) => (
  <Wrapper>
    <p>Logo</p>
    <NavBar>
      <MenuLink to="/" activeClassName="active">
        {t("navbar.home")}
      </MenuLink>
      <MenuLink to="/about" activeClassName="active">
        {t("navbar.aboutMe")}
      </MenuLink>
      <MenuLink to="/blog" activeClassName="active">
        {t("navbar.blog")}
      </MenuLink>
    </NavBar>
  </Wrapper>
)

Header.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(Header)
