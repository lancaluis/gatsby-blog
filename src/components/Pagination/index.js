import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { translate } from "../../i18n/translate"

import { Wrapper } from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
  t,
}) => (
  <Wrapper>
    {!isFirst && <Link to={prevPage}>← {t("pagination.previous")}</Link>}
    <p>
      {currentPage} {t("pagination.of")} {numPages}
    </p>
    {!isLast && <Link to={nextPage}>{t("pagination.next")} →</Link>}
  </Wrapper>
)

Pagination.propTypes = {
  t: PropTypes.object.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default translate(Pagination)
