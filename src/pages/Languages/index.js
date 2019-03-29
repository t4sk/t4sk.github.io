import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

export function Languages(prop) {
  return (
    <Layout>
      <SEO title="Languages | Smart Contract Programmer" />
      <ul>
        <li>
          <a href="/en">English</a>
        </li>

        <li>
          <a href="/jp">Japanese - 日本語</a>
        </li>
      </ul>
    </Layout>
  )
}

export default Languages
