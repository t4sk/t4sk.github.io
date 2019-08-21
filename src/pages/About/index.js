import React from "react"
import { Image, Icon } from "semantic-ui-react"
import PageLayout from "../../components/PageLayout"
import MainLayout from "../../components/MainLayout"
import SEO from "../../components/SEO"
import styles from "./index.module.css"
import profile from "./profile.jpeg"

function About(props) {
  return (
    <PageLayout>
      <SEO title="About | Smart Contract Programmer" />
      <MainLayout>
        <div className={styles.Component}>
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
          <p className={styles.intro}>
            Hi, I am a software engineer living in Japan, specializing in smart
            contracts. <br />
            You can contact me at{" "}
            <span className={styles.email}>
              contact@smartcontractprogrammer.com
            </span>
          </p>
        </div>
      </MainLayout>
    </PageLayout>
  )
}

About.propTypes = {}

export default About
