import React from "react"
import { Segment, Image, Header, Container, Button } from "semantic-ui-react"
import PageLayout from "../../components/PageLayout"
import SEO from "../../components/SEO"
import logo from "../../components/logo.svg"
import { BACKGROUND_COLOR } from "../../constants"
import styles from "./index.module.css"
import "./index.css"
import EmailSubscriptionForm from "./EmailSubscriptionForm"
import Tutorials from "./Tutorials"
import About from "./About"
import Contact from "./Contact"

function HomePage(props) {
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
          <Button size="massive" color="green" fluid as="a" href="#tutorials">
            Get Started
          </Button>
        </Container>
      </Segment>
      <div className={styles.main}>
        <EmailSubscriptionForm />
        <div id="tutorials">
          <Tutorials />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </PageLayout>
  )
}

HomePage.propTypes = {}

export default HomePage
