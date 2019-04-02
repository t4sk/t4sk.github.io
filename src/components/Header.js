import React from "react"
import PropTypes from "prop-types"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"
import "./Header.css"
import translate from "../translate"
import LANG from "./Header.lang"
import Logo from "./Logo.svg"

export function Header(props) {
  const { lang } = props

  return (
    <Navbar expand="md" fixed>
      <Navbar.Brand href={`/${lang}`} className="Header-brand">
        <div className="Header-brand-img">
          <Image src={Logo} />
        </div>
        SMART CONTRACT PROGRAMMER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href={`/${lang}/blog`}>
            {translate(LANG, lang, "Blog")}
          </Nav.Link>
          <Nav.Link href={`/${lang}/contact`}>
            {translate(LANG, lang, "Contact")}
          </Nav.Link>
          {lang == "en" ? (
            <Nav.Link href="/jp">日本語</Nav.Link>
          ) : (
            <Nav.Link href="/en">English</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

export default Header
