import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { Menu, Container } from "semantic-ui-react"
import "./Header.css"
import translate from "../translate"
import LANG from "./Header.lang"
import Logo from "./Logo.svg"

export function Header(props) {
  const { lang } = props

  function getPath(lang) {
    const { location } = props

    // split url into root, lang, rest of path
    const [, , ...rest] = location.pathname.split("/")

    return ["", lang, ...rest].join("/")
  }

  const enPath = getPath("en")
  const jpPath = getPath("jp")

  return (
    <Menu stackable borderless fluid>
      <Container>
        <Menu.Item header as="a" href="/">
          <img src={Logo} alt="logo" />
          <span className="Header-logo-text">SMART CONTRACT PROGRAMMER</span>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as="a" href={`/${lang}/blog`}>
            {translate(LANG, lang, "Blog")}
          </Menu.Item>
          <Menu.Item as="a" href={`/${lang}/about`}>
            {translate(LANG, lang, "About")}
          </Menu.Item>

          {lang == "en" ? (
            <Menu.Item as="a" href={jpPath}>
              Japanese
            </Menu.Item>
          ) : (
            <Menu.Item as="a" href={enPath}>
              English
            </Menu.Item>
          )}
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

Header.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default withRouter(Header)
