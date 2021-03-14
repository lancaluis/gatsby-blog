import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import { translate } from "../../i18n/translate"
import Thumbnail from "../Thumbnail"

import * as S from "./styled"

const ProfileImage = () => {
  const { profileImage } = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "eu.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <S.AuthorImage fixed={profileImage.childImageSharp.fixed} />
}

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
      <Thumbnail filename={thumbnail} alt={title} />
      <S.Infos>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.SubInfos>
          <ProfileImage />
          <S.AuthorInfo>
            <S.AuthorName>Luís Lança</S.AuthorName>
            <S.DateTime>
              <p>{date} - {timeToRead} {t("blog.timeToRead")}</p>
            </S.DateTime>
          </S.AuthorInfo>
        </S.SubInfos>
      </S.Infos>
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
