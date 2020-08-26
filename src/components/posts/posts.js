import React from "react"
import _ from "lodash"
import { Link } from "gatsby"
import * as S from "./posts.styles"

const Posts = ({ posts }) => {
  return (
    <S.Container>
      {posts.map(({ node }) => {
        const {
          frontmatter: {
            cover: {
              children: [{ fluid }],
            },
          },
        } = node
        const title = node.frontmatter.title || node.frontmatter.path
        console.log(fluid)
        return (
          <S.Post key={node.frontmatter.path}>
            <Link
              to={`/${_.kebabCase(node.frontmatter.category)}/${
                node.frontmatter.path
              }`}
            >
              <S.PostImage fluid={fluid} />
            </Link>
            <S.PostText>
              <Link
                to={`/${_.kebabCase(node.frontmatter.category)}/${
                  node.frontmatter.path
                }`}
              >
                <S.PostTitle>{title}</S.PostTitle>
              </Link>
              <S.PostMetaContainer>
                <S.PostMeta>{node.frontmatter.date}</S.PostMeta>
                <S.PostCategory>
                  <Link
                    to={`/category/${_.kebabCase(node.frontmatter.category)}`}
                  >
                    {node.frontmatter.category}
                  </Link>
                </S.PostCategory>
              </S.PostMetaContainer>
              <S.PostExcerpt
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <S.PostTagsContainer>
                {node.frontmatter.tags.map((tag, index) => (
                  <S.PostTag key={tag}>
                    <Link to={`/tags/${tag}`}>
                      {index === node.frontmatter.tags.length - 1
                        ? tag
                        : `${tag},`}
                    </Link>
                  </S.PostTag>
                ))}
              </S.PostTagsContainer>
            </S.PostText>
          </S.Post>
        )
      })}
    </S.Container>
  )
}

export default Posts
