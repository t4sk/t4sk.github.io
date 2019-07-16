import React from "react"
import PropTypes from "prop-types"
import { Container, Image, Icon } from "semantic-ui-react"
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
        <div className={styles.header}>
          <div className={styles.profile}>
            <Image src={profile} circular fluid />
          </div>
          <div className={styles.headerTexts}>
            <h1 className={styles.headerText}>Tasuku Nakamura</h1>
            <div>
              <Icon name="youtube" color="red" />
              <a
                href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
                target="__blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
            <div>
              <Icon name="twitter" color="blue" />
              <a
                href="https://twitter.com/ProgrammerSmart"
                target="__blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <div>
              <Icon name="github" />
              <a
                href="https://github.com/t4sk"
                target="__blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/*}
        <p>
          Author of{" "}
          <a
            href="https://github.com/t4sk"
            target="__blank"
            rel="noopener noreferrer"
          >
            Solidity By Examples
          </a>
        </p>
        */}
      </MainLayout>
    </PageLayout>
  )
}

About.propTypes = {}

export default About
