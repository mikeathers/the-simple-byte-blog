import React from "react"
import _ from "lodash"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Article } from "../components/article"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const path = post.frontmatter.path
  const { previous, next } = pageContext
  console.log(process.env.GATSBY_DISQUS_NAME)
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: path },
  }
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>
        <Article.Header>
          <Article.Title>{post.frontmatter.title}</Article.Title>
          <Article.MetaContainer>
            <Article.Date>{post.frontmatter.date}</Article.Date>
            <Article.Category>
              <Link to={`/category/${_.kebabCase(post.frontmatter.category)}`}>
                {post.frontmatter.category}
              </Link>
            </Article.Category>
          </Article.MetaContainer>

          <Article.TagContainer>
            {post.frontmatter.tags.map((tag, index) => (
              <Article.Tag key={tag}>
                <Link to={`/tags/${tag}`}>
                  {index === post.frontmatter.tags.length - 1 ? tag : `${tag},`}
                </Link>
              </Article.Tag>
            ))}
          </Article.TagContainer>
        </Article.Header>
        <Article.Body dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>

      <Article.AvailablePosts>
        <Article.AvailablePostsList>
          <Article.AvailablePostsListItem>
            {previous && (
              <Link
                to={`/${_.kebabCase(previous.frontmatter.category)}${
                  previous.fields.slug
                }`}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </Article.AvailablePostsListItem>
          <Article.AvailablePostsListItem>
            {next && (
              <Link
                to={`/${_.kebabCase(next.frontmatter.category)}${
                  next.fields.slug
                }`}
                rel="prev"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </Article.AvailablePostsListItem>
        </Article.AvailablePostsList>
      </Article.AvailablePosts>
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
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
`
