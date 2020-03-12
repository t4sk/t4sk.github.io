import React, { useState } from "react"
import PropTypes from "prop-types"
import { Form, Input } from "semantic-ui-react"
import styles from "./EmailSubscriptionForm.module.css"

export function EmailSubscriptionForm(props) {
  const [email, setState] = useState("")

  function onChange(e) {
    setState(e.target.value)
  }

  return (
    <div className={styles.component}>
      <h1>Subscribe for news and updates</h1>
      <div className={styles.form}>
        <Form
          action="https://smartcontractprogrammer.us19.list-manage.com/subscribe/post?u=7e2cbef6d220f8cb6ee957b85&amp;id=6e01d69c76"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <Input
            action={{
              // color: "green",
              content: <div className={styles.action}>Subscribe</div>,
              loading: false,
            }}
            fluid
            size="huge"
            placeholder="Type your email..."
            type="email"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            onChange={onChange}
            value={email}
          />

          {/*
          real people should not fill this in and expect good things - do not remove this or risk form bot signups
          */}
          <input
            type="text"
            name="b_7e2cbef6d220f8cb6ee957b85_6e01d69c76"
            tabIndex="-1"
            style={{ display: "none " }}
            value=""
            onChange={() => {}}
          />
        </Form>
      </div>
      <p>We won’t share or sell your email to 3rd parties</p>
    </div>
  )
}

EmailSubscriptionForm.propTypes = {}

export default EmailSubscriptionForm
