import React from "react"
import { Image, Icon, Divider } from "semantic-ui-react"
import styles from "./About.module.css"
import profile from "./profile.jpeg"

function About(props) {
  // TODO consulting and contact form

  return (
    <div className={styles.component}>
      <Image
        src={profile}
        circular
        fluid
        style={{ width: 150, height: 150 }}
        alt="profile"
      />
      <h1 className={styles.header}>Tasuku Nakamura</h1>
      <div className={styles.links}>
        <a
          href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
          target="__blank"
          rel="noopener noreferrer"
        >
          <Icon name="youtube" color="red" size="huge" />
        </a>
        <a
          href="https://twitter.com/ProgrammerSmart"
          target="__blank"
          rel="noopener noreferrer"
        >
          <Icon name="twitter" color="blue" size="huge" />
        </a>
        <a
          href="https://github.com/t4sk"
          target="__blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" color="black" size="huge" />
        </a>
      </div>

      <div className={styles.intro}>
        <p>
          Hi, I am a software engineer who makes videos about smart contracts.
        </p>
        <Divider />
        <div className={styles.list}>
          <div className={styles.listItem}>
            My{" "}
            <a
              href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA/featured"
              target="__blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>{" "}
            channel
          </div>
          <div className={styles.listItem}>
            Creator of{" "}
            <a
              href="https://solidity-by-example.org/"
              target="__blank"
              rel="noopener noreferrer"
            >
              Solidity by Example
            </a>
          </div>
        </div>
        <Divider />
        <p>
          You can contact me at{" "}
          <span className={styles.email}>
            contact@smartcontractprogrammer.com
          </span>
        </p>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
