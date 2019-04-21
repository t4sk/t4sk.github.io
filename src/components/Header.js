import React from "react"
import PropTypes from "prop-types"
import "./Header.css"

export function Header(props) {
  const { children } = props

  return <h1 className="Header">{children}</h1>
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
