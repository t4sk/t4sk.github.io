import React from "react"
import PropTypes from "prop-types"

function Link(props) {
  const { href, children } = props

  return (
    <a href={href} target="__blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
