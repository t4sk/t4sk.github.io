import React from "react"
import { Image } from "semantic-ui-react"
import styles from "./Footer.module.css"
import creativeCommonsLogo from "./creative-commons-logo.svg"

export function Footer(props) {
  return (
    <div className={styles.Footer}>
      <Image src={creativeCommonsLogo} style={{ height: 20, margin: 10 }} />
      <div>
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
          target="__blank"
        >
          Creative Commons CC BY-SA 3.0
        </a>
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
