import React from "react"
import PropTypes from "prop-types"
import { Container } from "semantic-ui-react"
import styles from "./MainLayout.module.css"

function MainLayout(props) {
  const { children } = props

  return (
    <div className={styles.MainLayout}>
      <Container>{children}</Container>
    </div>
  )
}

export default MainLayout
