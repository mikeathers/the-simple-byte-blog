import styled from "styled-components"
import * as styles from "styles"

export const Article = styled.article`
  margin: 0 auto;

  @media screen and (${styles.mq10}) {
    width: 90%;
    padding: 6rem 0;
  }

  @media screen and (${styles.mq13}) {
    width: 50%;
    padding: 6rem 0;
  }
`
export const Header = styled.header``

export const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 3.2rem;
`

export const MetaContainer = styled.div`
  display: flex;
`

export const Meta = styled.p`
  margin-bottom: 0.3rem;
`

export const Category = styled(Meta)`
  & > a {
    color: ${styles.colorMetaOrange};
  }
`
export const Date = styled(Meta)`
  margin-right: 1rem;
`

export const TagContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`
export const Tag = styled(Meta)`
  font-size: 0.8rem;
  color: ${styles.colorGrey};
  margin-right: 0.3rem;
  cursor: pointer;
`

export const Body = styled.section`
  margin-bottom: 4rem;

  & > h1,
  h2,
  h3 {
    margin-bottom: 0.8rem;
  }

  & > p {
    line-height: 2rem;
  }

  & .gatsby-resp-image-wrapper {
    margin: 3rem 0 5rem 0;
    max-width: 100% !important;
  }

  & pre {
    margin: 2rem 0;
  }
`

export const AvailablePosts = styled.nav``

export const AvailablePostsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;

  margin: 0 auto;
`
export const AvailablePostsListItem = styled.li`
  margin-right: 1rem;
`

Article.Header = Header
Article.MetaContainer = MetaContainer
Article.Title = Title
Article.Date = Date
Article.Category = Category
Article.Body = Body
Article.TagContainer = TagContainer
Article.Tag = Tag

Article.AvailablePosts = AvailablePosts
Article.AvailablePostsList = AvailablePostsList
Article.AvailablePostsListItem = AvailablePostsListItem
