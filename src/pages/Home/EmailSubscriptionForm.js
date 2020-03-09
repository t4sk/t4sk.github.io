import React from "react"
import PropTypes from "prop-types"
import { Input } from "semantic-ui-react"
import styles from "./EmailSubscriptionForm.module.css"

export function EmailSubscriptionForm(props) {
  return (
    <div className={styles.component}>
      <h1>Notify me of new tutorials</h1>
      <div className={styles.input}>
        <Input
          action={{
            // color: "green",
            content: <div className={styles.action}>Subscribe</div>,
          }}
          fluid
          size="huge"
          placeholder="Type your email..."
        />
      </div>
    </div>
  )
}

EmailSubscriptionForm.propTypes = {}

export default EmailSubscriptionForm
