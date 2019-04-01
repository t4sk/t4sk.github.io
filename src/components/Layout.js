import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import "./Layout.css"
import Header from "./Header"
import Footer from "./Footer"

export function Layout(props) {
  const { children, lang } = props

  return (
    <div className="Layout">
      <Container>
        <Header lang={lang} />
        {children}
      </Container>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
