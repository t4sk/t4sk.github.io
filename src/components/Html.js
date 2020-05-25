import React from "react"
import PropTypes from "prop-types"
import hljs from "highlight.js"
import "highlight.js/styles/atom-one-dark.css"
import hljsDefineSolidity from "highlightjs-solidity"

hljsDefineSolidity(hljs)
hljs.initHighlightingOnLoad()

function Html(props) {
  const { html } = props

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

Html.propTypes = {
  html: PropTypes.string.isRequired,
}

export default Html
