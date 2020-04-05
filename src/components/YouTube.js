import React from "react"
import PropTypes from "prop-types"
import styles from "./YouTube.module.css"

export function getUrl({ url, start, end }) {
  let src = url
  const queryParams = {}

  if (start) {
    queryParams.start = start
  }
  if (end) {
    queryParams.end = end
  }

  const query = Object.entries(queryParams)
    .map(([key, val]) => `${key}=${val}`)
    .join("&")

  if (query) {
    return `${src}?${query}`
  }

  return src
}

export function YouTube(props) {
  // TODO responsive YouTube

  return (
    <div className={styles.component}>
      <iframe
        width="889"
        height="500"
        src={getUrl(props)}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

YouTube.propTypes = {
  url: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
}

export default YouTube
