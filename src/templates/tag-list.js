import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import Profile from "components/profile/profile"
import Posts from "components/posts/posts"
import { PostListContainer } from "components/post-list-container/post-list-container.styles"

const Tags = props => {
  const { data } = props
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <PostListContainer>
        <Profile />
        <Posts posts={posts} />
      </PostListContainer>
    </Layout>
  )
}

export const postQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 160)
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            author
            tags
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Tags
