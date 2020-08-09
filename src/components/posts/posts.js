import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as S from "./posts.styles"
import { Link } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
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
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges

  return (
    <S.Container>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.path
        return (
          <Link
            key={node.frontmatter.path}
            to={`${node.frontmatter.category}/${node.frontmatter.path}`}
          >
            <S.Post>
              <S.PostTitle>{title}</S.PostTitle>
              <S.PostMetaContainer>
                <S.PostMeta>{node.frontmatter.date}</S.PostMeta>
                <S.PostCategory>{node.frontmatter.category}</S.PostCategory>
              </S.PostMetaContainer>
              <S.PostExcerpt
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </S.Post>
          </Link>
        )
      })}
    </S.Container>
  )
}

export default Posts
