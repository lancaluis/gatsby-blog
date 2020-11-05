import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Calendar } from "@styled-icons/boxicons-solid/Calendar"
import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"

import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import RecommendedPosts from "../../components/RecommendedPosts"
import Comments from "../../components/Comments"
import { translate } from "../../i18n/translate"

import * as S from "./styled"

const BlogPost = ({ t, data, pageContext }) => {
  const post = data.markdownRemark

  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <S.Wrapper>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          thumbnail={`https://compassionate-yonath-8a4429.netlify.app/assets/img/${post.frontmatter.thumbnail}`}
          url={post.fields.slug}
        />
        <S.BackToBlog>
          <S.BackToBlogLink to="/blog">← {t("post.backToBlog")}</S.BackToBlogLink>
        </S.BackToBlog>
        <S.Header>
          <S.Date>
            <S.Icon>
              <Calendar />
            </S.Icon>
            <p>{post.frontmatter.date}</p>
            <S.Icon>
              <TimeFive />
            </S.Icon>
            <p>
              {post.timeToRead} {t("blog.timeToRead")}
            </p>
          </S.Date>
          <S.Title>{post.frontmatter.title}</S.Title>
        </S.Header>
        <S.Main dangerouslySetInnerHTML={{ __html: post.html }}></S.Main>
        <RecommendedPosts next={next} previous={previous} />
        <Comments url={post.fields.slug} title={post.frontmatter.title} />
      </S.Wrapper>
    </Layout>
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
        description
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
