import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Calendar } from "@styled-icons/boxicons-solid/Calendar"
import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"
import { ArrowLeft } from "@styled-icons/feather/ArrowLeft"

import SEO from "../../components/seo"
import RecommendedPosts from "../../components/RecommendedPosts"
import Comments from "../../components/Comments"
import { translate } from "../../i18n/translate"

import {
  Wrapper,
  Main,
  BackToBlog,
  BackToBlogLink,
  Icon,
  Header,
  Title,
  Date,
} from "./styled"

const BlogPost = ({ t, data, pageContext }) => {
  const post = data.markdownRemark

  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Wrapper>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        thumbnail={post.frontmatter.thumbnail}
      />
      <BackToBlog>
        <Icon>
          <ArrowLeft />
        </Icon>
        <BackToBlogLink to="/blog">{t("post.backToBlog")}</BackToBlogLink>
      </BackToBlog>
      <Header>
        <Date>
          <Icon>
            <Calendar />
          </Icon>
          <p>{post.frontmatter.date}</p>
          <Icon>
            <TimeFive />
          </Icon>
          <p>
            {post.timeToRead} {t("blog.timeToRead")}
          </p>
        </Date>
        <Title>{post.frontmatter.title}</Title>
      </Header>
      <Main dangerouslySetInnerHTML={{ __html: post.html }}></Main>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Wrapper>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [/] MM [/] YYYY")
        title
        thumbnail
      }
      html
      timeToRead
    }
  }
`

BlogPost.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(BlogPost)
