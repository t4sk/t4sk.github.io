import React from "react"
import PropTypes from "prop-types"
import { Image } from "semantic-ui-react"
import styles from "./Post.module.css"

export function Post(props) {
  const { youTubeUrl, thumbnailUrl, title, createdAt } = props

  return (
    <a className={styles.component} href={youTubeUrl} target="__blank">
      <div className={styles.image}>
        <Image src={thumbnailUrl} fluid />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{createdAt}</div>
      </div>
    </a>
  )
}

Post.propTypes = {
  youTubeUrl: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default Post
