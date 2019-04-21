import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { Menu, Container } from "semantic-ui-react"
import Logo from "./Logo.svg"
import "./Nav.css"
import translate from "../translate"
import LANG from "./Nav.lang"

export function Nav(props) {
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
    <Menu
      borderless
      fluid
      fixed="top"
      inverted
      style={{ backgroundColor: "#20232a" }}
    >
      <Container>
        <Menu.Item header as="a" href="/">
          SMART CONTRACT PROGRAMMER
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

Nav.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default withRouter(Nav)
