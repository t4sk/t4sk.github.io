import React from "react"
import PropTypes from "prop-types"
import { Container } from "semantic-ui-react"
import styles from "./PageLayout.module.css"
import Nav from "./Nav"

export function PageLayout(props) {
  const { children } = props

  return (
    <div className={styles.PageLayout}>
      <Nav />
      <div style={{ paddingBottom: 40 }} />
      <div className={styles.main}>{children}</div>
      <div style={{ padding: 50 }} />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
