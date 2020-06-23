import React from "react"
import PropTypes from "prop-types"
import { Calendar } from "@styled-icons/boxicons-solid/Calendar"
import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"

import { translate } from "../../i18n/translate"
import Thumbnail from "../Thumbnail"

import {
  Container,
  Wrapper,
  LinkWrapper,
  Infos,
  Title,
  Description,
  Date,
  Icon,
} from "./styled"

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
    <Container>
      <LinkWrapper to={slug}>
        <Wrapper>
          <Thumbnail filename={thumbnail} alt={title} />
          <Infos>
            <Date>
              <Icon>
                <Calendar />
              </Icon>
              <p>{date}</p>
              <Icon>
                <TimeFive />
              </Icon>
              <p>
                {timeToRead} {t("blog.timeToRead")}
              </p>
            </Date>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Infos>
        </Wrapper>
      </LinkWrapper>
    </Container>
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
