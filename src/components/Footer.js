import React from "react"
import { Container, Image } from "semantic-ui-react"
import styles from "./Footer.module.css"
import creativeCommonsLogo from "./creative-commons-logo.svg"

export function Footer(props) {
  return (
    <div className={styles.component}>
      <Container>
        <div className={styles.row}>
          <Image
            src={creativeCommonsLogo}
            style={{ height: 20, margin: 10 }}
            alt="license"
          />
          <a
            href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
            target="__blank"
            className={styles.link}
          >
            Creative Commons CC BY-SA 3.0
          </a>
        </div>
      </Container>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
