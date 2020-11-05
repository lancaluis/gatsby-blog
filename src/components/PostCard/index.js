import React from "react"
import PropTypes from "prop-types"
import { Calendar } from "@styled-icons/boxicons-solid/Calendar"
import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"

import { translate } from "../../i18n/translate"
import Thumbnail from "../Thumbnail"

import * as S from "./styled"

const PostCard = ({
  t,
  slug,
  thumbnail,
  date,
  timeToRead,
  title,
  description,
}) => {
  return (
    <S.LinkWrapper to={slug}>
      <S.Wrapper>
        <Thumbnail filename={thumbnail} alt={title} />
        <S.Infos>
          <S.Date>
            <S.Icon>
              <Calendar />
            </S.Icon>
            <p>{date}</p>
            <S.Icon>
              <TimeFive />
            </S.Icon>
            <p>
              {timeToRead} {t("blog.timeToRead")}
            </p>
          </S.Date>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Infos>
      </S.Wrapper>
    </S.LinkWrapper>
  )
}

PostCard.propTypes = {
  t: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  date: PropTypes.string,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default translate(PostCard)
