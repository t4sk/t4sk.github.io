import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Html from "./index.html.js"

function Base(props) {
  const { lang } = props

  return (
    <Layout lang={lang}>
      <SEO title="About | Smart Contract Programmer" lang={lang} />
      <Html />
    </Layout>
  )
}

const About = {
  En: props => Base({ ...props, lang: "en" }),
  Jp: props => Base({ ...props, lang: "jp" }),
}

export default About
