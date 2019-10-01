import React from "react"
import { Segment, Image, Header, Container } from "semantic-ui-react"
import PageLayout from "../../components/PageLayout"
import SEO from "../../components/SEO"
import logo from "../../components/logo.svg"
import styles from "./index.module.css"
import Post from "./Post"

function chunk(arr, size) {
  let chunks = []

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }

  return chunks
}

const POSTS = [
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/oTS9uxU6cAM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFNU6ibn-6fR2RUzTKjSSowdAAoA",
    youTubeUrl: "https://www.youtube.com/watch?v=oTS9uxU6cAM",
    title: "Learn Solidity - Gas and Gas Price",
    createdAt: "2019-09-30",
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ybPQsjssyNw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBS8cUaXPkG9N9EJWSwHCchOI-NNQ",
    youTubeUrl: "https://www.youtube.com/watch?v=ybPQsjssyNw",
    title: "Learn Solidity - Ether and Wei",
    createdAt: "2019-09-21",
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/4XQsHBJScEk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCSidkVzqzY9matqnVSmYJZNO8IAA",
    youTubeUrl: "https://www.youtube.com/watch?v=4XQsHBJScEk&t=5s",
    title: "Learn Solidity - State Variables",
    createdAt: "2019-09-15",
  },
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
