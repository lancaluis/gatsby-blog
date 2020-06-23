import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import PostCard from "../components/PostCard"
import { translate } from "../i18n/translate"

import { Wrapper } from "../styles/blog"

const BlogPage = ({ t }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
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
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Wrapper>
      <SEO title="Blog" />
      {postList.map(
        ({
          node: {
            frontmatter: { date, description, title, thumbnail },
            timeToRead,
          },
        }) => (
          <PostCard
            slug="/about"
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            thumbnail={thumbnail}
          />
        )
      )}
    </Wrapper>
  )
}

BlogPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(BlogPage)
