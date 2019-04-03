import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./index.css"

function NotFound(props) {
  return (
    <Layout lang="en">
      <SEO title="Not Found | Smart Contract Programmer" lang="en" />
      <div className="NotFound">
        <h1 className="NotFound-header">404</h1>
        <div className="NotFound-sub-header">Not Found</div>
      </div>
    </Layout>
  )
}

export default NotFound
