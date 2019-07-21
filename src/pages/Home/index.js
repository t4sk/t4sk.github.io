import React from "react"
import { Segment, Image, Header, Container } from "semantic-ui-react"
import PageLayout from "../../components/PageLayout"
import SEO from "../../components/SEO"
import logo from "../../components/logo.svg"

function Home(props) {
  return (
    <PageLayout>
      <SEO title="Smart Contract Programmer" />
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 150,
          padding: "2em 0em",
          backgroundColor: "#20232a",
        }}
        vertical
      >
        <Container text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image src={logo} style={{ height: 250 }} />
          </div>
          <Header
            as="h1"
            content="Smart Contract Programming"
            inverted
            style={{
              fontSize: "2.5em",
              // fontWeight: "normal",
              marginBottom: 0,
              marginTop: 0,
            }}
          />
          <p>a blog for developers about smart contracts</p>
        </Container>
      </Segment>
      foo
    </PageLayout>
  )
}

Home.propTypes = {}

export default Home
