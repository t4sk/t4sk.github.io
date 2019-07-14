import React from "react"
import PropTypes from "prop-types"
import {
  Segment,
  Grid,
  Image,
  Header,
  Button,
  Icon,
  Container,
} from "semantic-ui-react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

function Home(props) {
  const mobile = false
  return (
    <Layout>
      <SEO title="Smart Contract Programmer" />
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 150, padding: "1em 0em" }}
        vertical
      >
        <Container text>
          <Header
            as="h1"
            content="Learn Smart Contract Programming"
            inverted
            style={{
              fontSize: "2.5em",
              // fontWeight: "normal",
              marginBottom: 0,
              marginTop: "1.0em",
            }}
          />
          <p>a blog for developers about smart contracts</p>
        </Container>
      </Segment>
    </Layout>
  )
}

Home.propTypes = {}

export default Home
