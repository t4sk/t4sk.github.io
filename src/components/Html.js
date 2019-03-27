import React, { Component } from "react"
import PropTypes from "prop-types"

export function Html(props) {
  const { html } = props
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

Html.propTypes = {
  html: PropTypes.string.isRequired,
}

export default Html
