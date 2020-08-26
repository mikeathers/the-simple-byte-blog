import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import * as S from "./profile.styles"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          instagram
          linkedin
          github
        }
      }
    }
  `)
  const { author, instagram, github, linkedin } = data.site.siteMetadata
  console.log(data.avatar.childImageSharp.fixed)

  return (
    <S.Container>
      <S.ProfilePicture
        fixed={data.avatar.childImageSharp.fixed}
        alt={data.site.siteMetadata.author}
      />
      <S.ProfileName>{author}</S.ProfileName>
      <S.ProfileSummary>
        Software engineer, tech enthusiast, life hacker. Working out of sunny
        Manchester, current stack .NET Core, React, MySql.{" "}
      </S.ProfileSummary>
      <S.SocialsContainer>
        <Link to={instagram}>
          <S.InstagramIcon />
        </Link>
        <Link to={github}>
          <S.GitHubIcon />
        </Link>
        <Link to={linkedin}>
          <S.LinkedinIcon />
        </Link>
      </S.SocialsContainer>
      <S.TradeMark>© All rights reserved.</S.TradeMark>
    </S.Container>
  )
}

export default Profile
