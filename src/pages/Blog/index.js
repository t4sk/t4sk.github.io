import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import posts from "./posts"

export function Blog(prop) {
  return (
    <Layout>
      <SEO title="Blog | Smart Contract Programmer" />
      <div>blog</div>
    </Layout>
  )
}

export default Blog
