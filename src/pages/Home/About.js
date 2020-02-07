import React from "react"
import { Image, Icon, Divider } from "semantic-ui-react"
import styles from "./About.module.css"
import profile from "./profile.jpeg"

function About(props) {
  // TODO consulting and contact form

  return (
    <div className={styles.component}>
      <div className={styles.profile}>
        <Image
          src={profile}
          circular
          fluid
          style={{ width: 150, height: 150 }}
          alt="profile"
        />
        <h1 className={styles.header}>Tasuku Nakamura</h1>
      </div>
      <div className={styles.intro}>
        <p>
          Hi, I am a software engineer who makes videos about smart contracts.
        </p>
        <p>
          Creator of{" "}
          <a
            href="https://solidity-by-example.org/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Solidity by Example
          </a>
        </p>
      </div>

      <Divider />

      <h3>Follow me</h3>
      <div>
        <a
          href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA/featured"
          target="__blank"
          rel="noopener noreferrer"
        >
          <div className={styles.followMeLink}>
            <Icon name="youtube" color="red" size="large" />
            YouTube
          </div>
        </a>
        <a
          href="https://twitter.com/ProgrammerSmart"
          target="__blank"
          rel="noopener noreferrer"
        >
          <div className={styles.followMeLink}>
            <Icon name="twitter" color="blue" size="large" />
            Twitter
          </div>
        </a>
        <a
          href="https://github.com/t4sk"
          target="__blank"
          rel="noopener noreferrer"
        >
          <div className={styles.followMeLink}>
            <Icon name="github" color="black" size="large" />
            GitHub
          </div>
        </a>
      </div>

      <Divider />
      <p>
        You can contact me at{" "}
        <span className={styles.email}>
          contact@smartcontractprogrammer.com
        </span>
      </p>
    </div>
  )
}

About.propTypes = {}

export default About
