import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import Profile from "components/profile/profile"
import Posts from "components/posts/posts"
import { PostListContainer } from "components/post-list-container/post-list-container.styles"

const Index = props => {
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
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
                  fluid(maxWidth: 800, maxHeight: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
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

export default Index
