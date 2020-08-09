import styled from "styled-components"
import * as styles from "styles"

export const Container = styled.div`
  @media screen and (${styles.mq7}) {
    margin-left: 40%;
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
`

export const PostTitle = styled.h2`
  margin-bottom: 0.4rem;
`

export const PostExcerpt = styled.p``

export const PostMetaContainer = styled.div`
  display: flex;
  height: 2.5rem;
`
export const PostMeta = styled.p`
  margin-right: 0.8rem;
`

export const PostCategory = styled(PostMeta)`
  color: ${styles.colorMetaOrange};
`
