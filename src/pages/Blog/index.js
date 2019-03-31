import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import posts from "./posts"

// TODO list posts by lang, year
function Base(props) {
  const { lang } = props

  return (
    <Layout lang={lang}>
      <SEO title="Blog | Smart Contract Programmer" lang={lang} />
      <div>{lang}</div>
    </Layout>
  )
}

const Blog = {
  En: props => Base({ ...props, lang: "en" }),
  Jp: props => Base({ ...props, lang: "jp" }),
}

export default Blog
