const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve(`./src/templates/tag-list.js`)
  const categoryTemplate = path.resolve(`./src/templates/category-list.js`)

  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                category
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
        categoryGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.postsRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const path = `${_.kebabCase(post.node.frontmatter.category)}${
      post.node.fields.slug
    }`
    createPage({
      path,
      component: blogTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Extract tag data from query
  const categories = result.data.categoryGroup.group

  // Make tag pages
  categories.forEach(category => {
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        pages: path.resolve(__dirname, "src/pages"),
        styles: path.resolve(__dirname, "src/styles"),
        images: path.resolve(__dirname, "src/images"),
        templates: path.resolve(__dirname, "src/templates"),
        scss: path.resolve(__dirname, "src/scss"),
        pagestyles: path.resolve(__dirname, "src/pagestyles"),
        services: path.resolve(__dirname, "src/services"),
        hooks: path.resolve(__dirname, "src/hooks"),
        data: path.resolve(__dirname, "src/data"),
        containers: path.resolve(__dirname, "src/containers"),
      },
    },
  })
}
