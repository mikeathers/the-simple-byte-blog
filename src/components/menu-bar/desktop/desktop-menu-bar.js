import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import * as S from "./desktop-menu-bar.styles"
import * as menuItems from "../menu-items"

const MenuBar = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const handleSelectItem = item => setSelectedItem(item)
  const location = useLocation().pathname
  const componentIsMounted = useRef(true)

  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/logo-6.png/" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  useEffect(() => {
    if (location === menuItems.home.path) setSelectedItem(menuItems.home.name)

    if (location === menuItems.startHere.path)
      setSelectedItem(menuItems.startHere.name)
    if (location === menuItems.cleanCode.path)
      setSelectedItem(menuItems.cleanCode.name)
    if (location === menuItems.softSkills.path)
      setSelectedItem(menuItems.softSkills.name)
    if (location === menuItems.tutorials.path)
      setSelectedItem(menuItems.tutorials.name)
    if (location === menuItems.contactMe.path)
      setSelectedItem(menuItems.contactMe.name)

    window.addEventListener("scroll", () => {
      if (componentIsMounted.current) {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
      }
    })
    return () => {
      componentIsMounted.current = false
    }
  }, [location])

  return (
    <S.Container isScrolled={isScrolled}>
      <S.Logo fixed={data.logo.childImageSharp.fixed} alt={title} />

      <S.Menu>
        {menuItems.all.map((item, index) => (
          <S.MenuItem
            key={index}
            onClick={() => handleSelectItem(item.name)}
            selected={selectedItem === item.name}
            to={item.path}
          >
            {item.name}
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Container>
  )
}

export default MenuBar
