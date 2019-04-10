import React from "react"
import PropTypes from "prop-types"
import { Image } from "semantic-ui-react"
import "./PostImage.css"

function PostImage(props) {
  const { src, alt } = props

  return (
    <span className="PostImage">
      <Image src={src} alt={alt} bordered />
    </span>
  )
}

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default PostImage
