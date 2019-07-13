import React from "react"
import PropTypes from "prop-types"
import { Container } from "semantic-ui-react"
import styles from "./Layout.module.css"
import Nav from "./Nav"

export function Layout(props) {
  const { children } = props

  return (
    <div className={styles.Layout}>
      <Nav />
      <div style={{ paddingBottom: 40 }} />
      <Container>
        <div className={styles.main}>{children}</div>
      </Container>
      <div style={{ padding: 50 }} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
