import React, { useState, useRef, useEffect } from "react"
import * as S from "./mobile-menu-bar.styles"
import * as menuItems from "../menu-items"
import { useLocation } from "@reach/router"
import { navigate } from "@reach/router"

const MenuBarMobile = () => {
  const checkBoxRef = useRef(null)
  const [selectedItem, setSelectedItem] = useState(menuItems.home)
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation().pathname
  const componentIsMounted = useRef(true)

  const toggleOpen = () => {
    !isOpen ? setTimeout(() => setIsOpen(!isOpen), 500) : setIsOpen(!isOpen)
  }
  const handleMenuItemClick = async (e, item) => {
    e.preventDefault()
    setSelectedItem(item.name)
    await handleMenuActions()
    setTimeout(() => navigate(item.path), 700)
  }

  const handleMenuActions = async () => {
    return new Promise(resolve => {
      setTimeout(function() {
        checkBoxRef.current.checked = false
        setIsOpen(false)
        resolve()
      }, 500)
    })
  }

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
      if (componentIsMounted.current)
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    })
    return () => {
      componentIsMounted.current = false
    }
  }, [location])

  return (
    <S.Container isScrolled={isScrolled}>
      <S.TopNavBar isScrolled={isScrolled}>
        <S.LogoContainer href={menuItems.home.path}>
          <h2>The Simple Byte</h2>
        </S.LogoContainer>
        <S.HiddenCheckbox
          type="checkbox"
          id="nav-mobile-check"
          ref={checkBoxRef}
        />
        <S.Toggle htmlFor="nav-mobile-check" onClick={() => toggleOpen()}>
          <S.Icon selected={isOpen}>&nbsp;</S.Icon>
        </S.Toggle>
        <S.Background isOpen={isOpen}>&nbsp;</S.Background>
      </S.TopNavBar>

      {isOpen && (
        <S.NavMenuContainer>
          <S.NavMenu>
            {menuItems.all.map((item, index) => (
              <S.NavMenuItem key={index}>
                <S.NavMenuItemButton
                  onClick={e => handleMenuItemClick(e, item)}
                  name={item.name}
                  selected={selectedItem === item.name}
                  to="#"
                >
                  <S.NavMenuItemIndex>0{++index}</S.NavMenuItemIndex>{" "}
                  {item.name}
                </S.NavMenuItemButton>
              </S.NavMenuItem>
            ))}
          </S.NavMenu>

          <S.NavFooter>
            <S.Title>Athco</S.Title>
            <S.Title2>Digital.</S.Title2>
          </S.NavFooter>
        </S.NavMenuContainer>
      )}
    </S.Container>
  )
}

export default MenuBarMobile
