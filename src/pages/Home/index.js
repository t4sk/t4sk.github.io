import React from "react"
import { Segment, Image, Header, Container } from "semantic-ui-react"
import PageLayout from "../../components/PageLayout"
import SEO from "../../components/SEO"
import logo from "../../components/logo.svg"
import styles from "./index.module.css"
import Post from "./Post"
import POSTS from "./posts"

function chunk(arr, size) {
  let chunks = []

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }

  return chunks
}

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
            <Image src={logo} style={{ height: 250 }} alt="logo" />
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
      <div className={styles.main}>
        <div className={styles.posts}>
          {chunk(POSTS, 3).map((posts, i) => (
            <div key={i} className={styles.row}>
              {posts.map((post, j) => (
                <div key={j} className={styles.post}>
                  <Post {...post} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

Home.propTypes = {}

export default Home
