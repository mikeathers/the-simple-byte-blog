import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { darken } from "polished"
import * as styles from "styles"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000000;
  top: 0;
  width: 100%;
  transition: all 0.3s ease;

  @media screen and (${styles.mq10}) {
    display: none !important;
  }
`

export const TopNavBar = styled.div`
  z-index: 10;
  width: 100%;
  padding: 1.25rem 1rem;
  background-color: ${styles.colorWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: hsla(0, 0%, 100%, 0.8);
    `}
`
export const LogoContainer = styled.a`
  z-index: 10;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  color: ${styles.colorWhite};
  transition: all 0.3s ease;
  height: 40px;
  margin-right: 1rem;
`

export const Background = styled.div`
	width: 180px;
	height: 180px;
	top: -12rem;
	right: -5rem;
	border-radius: 50%;
	position: fixed;
	background-color: ${styles.colorWhite};
	z-index: 1;
	transition: transform 0.8s ease-in-out;

	@media screen and (${styles.mq10}) {
		top: 0;
		left: 90px;
	}

	/* transform: ${({ isOpen }) => isOpen && "scale(20)"}; */
`

export const Icon = styled.span`
  width: 25px;
  height: 2.5px;
  background-color: ${styles.colorPrimary};
  display: inline-block;
  z-index: 10000000;
  position: absolute;
  top: 0.9rem;
  right: 0.428rem;
  &:before,
  &:after {
    content: "";
    width: 25px;
    height: 2.5px;
    background-color: ${styles.colorPrimary};
    display: inline-block;
    position: absolute;
    right: 0;
    transition: all 0.2s;
  }

  &:before {
    top: -7px;
  }

  &:after {
    top: 7px;
  }
`

export const Toggle = styled.label`
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 2rem;
  width: 2rem;

  &:hover ${Icon}:before {
    top: -7px;
  }

  &:hover ${Icon}:after {
    top: 7px;
  }
`

export const HiddenCheckbox = styled.input`
  display: none;

  &:checked + ${Toggle} ${Icon} {
    background-color: transparent;
  }

  &:checked + ${Toggle} ${Icon}:before {
    top: 0;
    transform: rotate(135deg);
    background-color: ${styles.colorPrimary};
  }

  &:checked + ${Toggle} ${Icon}:after {
    top: 0;
    transform: rotate(-135deg);
    background-color: ${styles.colorPrimary};
  }

  &:checked ~ ${Background} {
    transform: scale(20);
  }

  &:checked ~ ${LogoContainer} {
    border: 2px solid red;
  }
`

export const NavMenuContainer = styled.nav`
  min-height: 70vh;
  position: absolute;
  top: 5rem;
  z-index: 1500;
  transition: all 0.8s ease;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const NavMenu = styled.ul`
  list-style-type: none;
  text-transform: uppercase;
`

export const NavMenuItemButton = styled(Link)`
  font-size: 1.5rem;
  display: inline-block;
  font-weight: 300;
  padding: 10px 20px;
  color: ${styles.colorPrimary};
  text-decoration: none;
  text-transform: uppercase;
  background-size: 220%;
  transition: all 0.4s;

  &:link,
  &:visited {
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${styles.colorPrimary} 50%
    );
  }

  &:hover,
  &:active {
    background-position: 100%;
    color: ${styles.colorWhite};
    transform: translateX(20px);
  }

  ${({ selected }) =>
    selected &&
    css`
      background-position: 100%;
      color: ${styles.colorWhite} !important;
      transform: translateX(20px);
    `};
`

export const NavMenuItem = styled.li`
  padding: 10px;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

export const NavMenuItemIndex = styled.span`
  display: inline-block;
`
export const NavFooter = styled.div`
  color: ${styles.colorPrimary};
  font-family: ${styles.headingFont};
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
`

export const Title = styled.h1`
  font-weight: 400;
  font-family: ${styles.headingFont};
  color: ${styles.colorPrimary};
`
export const Title2 = styled(Title)`
  color: ${styles.colorBlack};
`
