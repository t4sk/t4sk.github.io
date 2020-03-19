import React from "react"
import PropTypes from "prop-types"
import styles from "./Contact.module.css"

export function Contact(props) {
  return (
    <p>
      You can contact me at{" "}
      <span className={styles.email}>contact@smartcontractprogrammer.com</span>
    </p>
  )
}

Contact.propTypes = {}

export default Contact
