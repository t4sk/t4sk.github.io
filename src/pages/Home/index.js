import React from "react"
import { Segment, Image, Header, Container, Button } from "semantic-ui-react"
import PageLayout from "../../components/PageLayout"
import SEO from "../../components/SEO"
import logo from "../../components/logo.svg"
import { BACKGROUND_COLOR } from "../../constants"
import styles from "./index.module.css"
import "./index.css"
import EmailSubscriptionForm from "./EmailSubscriptionForm"
import Courses from "./Courses"
import About from "./About"

function Home(props) {
  // TODO mobile friendly
  return (
    <PageLayout>
      <SEO title="Smart Contract Programmer" />
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: "70vh",
          backgroundColor: BACKGROUND_COLOR,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 80,
        }}
        vertical
      >
        <Image src={logo} className={styles.logo} alt="logo" />
        <Container text>
          <Header
            as="h1"
            content="Learn to Code Smart Contracts"
            inverted
            style={{
              fontSize: "5rem",
              marginBottom: 50,
              marginTop: 0,
            }}
          />
          <Button size="massive" color="green" fluid>
            Get Started
          </Button>
        </Container>
      </Segment>
      <div className={styles.main}>
        <EmailSubscriptionForm />
        <div id="courses">
          <Courses />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">contact</div>
      </div>
    </PageLayout>
  )
}

Home.propTypes = {}

export default Home
