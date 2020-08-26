import styled from "styled-components"
import Image from "gatsby-image"
import * as styles from "styles"

export const Container = styled.div`
  padding-top: 2rem;

  @media screen and (${styles.mq7}) {
    margin-left: 35%;
  }
  @media screen and (${styles.mq10}) {
    padding-top: 6rem;
  }
  @media screen and (${styles.mq13}) {
    padding-top: 4.5rem;
  }
`
export const Post = styled.div`
  width: 90%;
  margin-bottom: 5rem;
  position: relative;
`

export const PostText = styled.div``

export const PostTitle = styled.h2`
  margin-bottom: 0.4rem;
`

export const PostExcerpt = styled.p`
  margin-bottom: 0.5rem;
`

export const PostMetaContainer = styled.div`
  display: flex;
  height: 2.5rem;
`
export const PostMeta = styled.p`
  margin-right: 0.8rem;
`

export const PostCategory = styled(PostMeta)`
  & > a {
    color: ${styles.colorMetaOrange};
  }
`
export const PostTagsContainer = styled.div`
  display: flex;
`

export const PostTag = styled.p`
  font-size: 0.8rem;
  color: ${styles.colorGrey};
  margin-right: 0.3rem;
  cursor: pointer;
`

export const PostImage = styled(Image)`
  margin-bottom: 2rem;
`
