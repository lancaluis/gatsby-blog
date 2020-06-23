import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper } from "./styled"

const Thumbnail = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { absolutePath: { regex: "/images/thumbnails/" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      return <Wrapper alt={props.alt} sizes={imageSizes} />
    }}
  />
)

export default Thumbnail
