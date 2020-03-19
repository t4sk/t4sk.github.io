import React from "react"
import PropTypes from "prop-types"
import styles from "./PageLayout.module.css"
import Nav from "./Nav"
import Footer from "./Footer"

export function PageLayout(props) {
  const { children } = props

  // NOTE: id="top" used to scroll to top
  return (
    <div id="top" className={styles.PageLayout}>
      <Nav />
      <div style={{ paddingBottom: 40 }} />
      <div className={styles.main}>{children}</div>
      <div style={{ padding: 50 }} />
      <Footer />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
