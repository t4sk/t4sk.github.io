import React from "react"
import PropTypes from "prop-types"
import PageLayout from "../../components/PageLayout"
import SEO from "../../components/SEO"
import styles from "./index.module.css"

function NotFound(props) {
  return (
    <PageLayout>
      <SEO title="Not Found | Smart Contract Programmer" />
      <div className={styles.NotFound}>
        <h1 className={styles.header}>404</h1>
        <div className={styles.subHeader}>Not Found</div>
      </div>
    </PageLayout>
  )
}

NotFound.propTypes = {}

export default NotFound
