import styled, { css } from "styled-components"
import Image from "gatsby-image"
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi"
import * as styles from "styles"

export const Container = styled.div`
  width: 90%;
  height: 80vh;
  transition: all 0.3s ease;

  @media screen and (${styles.mq7}) {
    position: fixed;
    width: 25%;
    height: 100vh;
  }

  @media screen and (${styles.mq10}) {
    padding: 6rem 0;
  }

  @media screen and (${styles.mq13}) {
    padding: 6rem 1rem;
  }

  &::after {
    display: none;
    background: #e6e6e6;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#e6e6e6),
      color-stop(48%, #e6e6e6),
      to(#fff)
    );
    background: linear-gradient(180deg, #e6e6e6 0, #e6e6e6 48%, #fff);
    position: absolute;
    content: "";
    width: 0.0625rem;
    height: 70%;
    top: 0;
    right: -20px;
    bottom: 0;

    @media screen and (${styles.mq7}) {
      display: block;
    }
    @media screen and (${styles.mq10}) {
      top: 100px;
    }
    @media screen and (${styles.mq13}) {
      top: 70px;
    }
  }
`

export const ProfilePicture = styled(Image)`
  border-radius: 50%;
  margin-bottom: 2rem;
`

export const ProfileName = styled.h3`
  margin-bottom: 1.5rem;
  font-weight: 500;
`

export const ProfileSummary = styled.p`
  line-height: 2rem;
`
export const SocialsContainer = styled.div`
  margin-bottom: 2rem;
`

const SocialStyles = css`
  font-size: 1.6rem;
  margin-right: 1rem;
  cursor: pointer;
`

export const InstagramIcon = styled(FiInstagram)`
  ${SocialStyles}
`

export const GitHubIcon = styled(FiGithub)`
  ${SocialStyles}
`

export const LinkedinIcon = styled(FiLinkedin)`
  ${SocialStyles}
`
export const TradeMark = styled.div`
  opacity: 0.45;
`
