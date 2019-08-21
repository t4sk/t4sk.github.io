import React from "react"
import { Segment, Image, Header, Container } from "semantic-ui-react"
import PageLayout from "../../components/PageLayout"
import SEO from "../../components/SEO"
import logo from "../../components/logo.svg"
import styles from "./index.module.css"
import Post from "./Post"

const POSTS = [
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/hMwdd664_iw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDZXbU3wGs1vpsnWX06BEHw9TookQ",
    youTubeUrl: "https://www.youtube.com/watch?v=hMwdd664_iw",
    title: "Learn Solidity - Hello World",
    createdAt: "2019-08-20",
  },
]

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
      <div className={styles.posts}>
        {POSTS.map((post, i) => (
          <div key={i} className={styles.post}>
            <Post {...post} />
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

Home.propTypes = {}

export default Home
