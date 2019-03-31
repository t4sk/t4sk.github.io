import React from "react"
import PropTypes from "prop-types"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"
import "./Header.css"
import Logo from "./Logo.svg"
import LanguageSVG from "./LanguageSVG"

export function Header(props) {
  const { lang } = props

  return (
    <Navbar expand="md" fixed>
      <Navbar.Brand href={`/${lang}`} className="Header-brand">
        <div className="Header-brand-img">
          <Image src={Logo} fluid />
        </div>
        SMART CONTRACT PROGRAMMER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href={`/${lang}/blog`}>Blog</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href={`/${lang}/about`}>About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/languages">
            <LanguageSVG />
            <span>Languages</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

export default Header
