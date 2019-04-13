import React from "react"
import PropTypes from "prop-types"
import { Image as SemanticImage } from "semantic-ui-react"
import "./Image.css"

function Image(props) {
  const { src, alt } = props

  return (
    <span className="Image">
      <SemanticImage src={src} alt={alt} bordered />
    </span>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image
