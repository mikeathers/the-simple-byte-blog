import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import MenuBar from "components/menu-bar/desktop/desktop-menu-bar"
import MenuBarMobile from "components/menu-bar/mobile/mobile-menu-bar"
import * as styles from "styles"

import "./layout.css"

const Container = styled.div`
  min-height: 10000px;
`
const Content = styled.div`
  padding: 6rem 2rem;
`
const Layout = ({ children }) => {
  return (
    <Container>
      <MenuBar title="The Simple Byte" />
      <MenuBarMobile />
      <Content>{children}</Content>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  children: <div></div>,
}

export default Layout
