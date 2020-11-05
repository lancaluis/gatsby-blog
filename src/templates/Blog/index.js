import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import PostCard from "../../components/PostCard"
import { translate } from "../../i18n/translate"
import Pagination from "../../components/Pagination"

import * as S from "./styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <S.Wrapper>
        <SEO
          title={props.t("blog.titlePage")}
          description={props.t("blog.descriptionPage")}
          url="https://luislanca.dev/blog"
        />
        {postList.map(
          (
            {
              node: {
                frontmatter: { date, description, title, thumbnail },
                timeToRead,
                fields: { slug },
              },
            },
            i
          ) => (
            <PostCard
              slug={slug}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              thumbnail={thumbnail}
              key={i}
            />
          )
        )}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </S.Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [/] MM [/] YYYY")
            description
            title
            thumbnail
          }
          timeToRead
        }
      }
    }
  }
`

BlogList.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(BlogList)
