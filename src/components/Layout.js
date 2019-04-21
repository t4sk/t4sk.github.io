import React from "react"
import PropTypes from "prop-types"
import { Container } from "semantic-ui-react"
import "./Layout.css"
import Header from "./Header"
import Footer from "./Footer"

export function Layout(props) {
  const { children, lang } = props

  return (
    <div className="Layout">
      <Header lang={lang} />
      <div style={{ padding: 50 }} />
      <Container>
        <div className="Layout-main">{children}</div>
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
