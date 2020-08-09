import { Link } from "gatsby"
import styled, { css } from "styled-components"
import * as styles from "styles"

export const Container = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  box-shadow: ${styles.navBarShadow};
  display: none;
	position: fixed;
	z-index: 10000;
	transition: all 0.3s ease;
	align-items: center;

	${({ isScrolled }) =>
    isScrolled &&
    css`
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: hsla(0, 0%, 100%, 0.8);
    `}

	@media screen and (${styles.mq10}) {
    display: flex !important;
    flex-direction: column;
  }
  
  @media screen and (${styles.mq13}) {
    padding: ${({ isScrolled }) =>
      isScrolled ? "1.5rem 2rem" : "2.5rem 5rem"};
      flex-direction: row;
  }	
`

export const Title = styled.h1`
  @media screen and (${styles.mq10}) {
    margin-bottom: 1rem;
  }

  @media screen and (${styles.mq13}) {
    margin-bottom: 0;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.3s ease;
`

export const MenuItem = styled(Link)`
  margin-right: 2rem;
  cursor: pointer;
  color: ${({ selected }) => (selected ? styles.colorBlack : styles.colorGrey)};
  text-decoration: none;
  padding: 0.1rem 0.5rem;
  font-size: 1rem;
  border-bottom: 2px solid transparent;
  border-bottom: ${({ selected }) =>
    selected && `1px solid ${styles.colorBlack}`};
`
