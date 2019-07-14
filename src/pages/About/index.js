import React from "react"
import PropTypes from "prop-types"
import { Container, Image } from "semantic-ui-react"
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
          <div style={{ maxWidth: 150 }}>
            <Image src={profile} circular fluid />
          </div>
          <div className={styles.headerTexts}>
            <h1 className={styles.headerText}>Tasuku Nakamura</h1>
            <div className={styles.subHeaderText}>
              Coder | Author | Entrepreneur
            </div>
          </div>
        </div>

        <div>
          contact<span>@</span>smartcontractprogrammer.com
        </div>
        <a
          href="https://twitter.com/ProgrammerSmart"
          target="__blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <br />
        <a
          href="https://github.com/t4sk"
          target="__blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </MainLayout>
    </PageLayout>
  )
}

About.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

export default About
