import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import "./Layout.css"
import Header from "./Header"
import Footer from "./Footer"

export function Layout(props) {
  const { children } = props
  return (
    <div className="Layout">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
