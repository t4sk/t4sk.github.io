import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

// TODO list most recent posts (both eng and jp)
function Base(props) {
  const { lang } = props

  return (
    <Layout lang={lang}>
      <SEO title="Smart Contract Programmer" lang={lang} />
      <div>{lang}</div>
    </Layout>
  )
}

const Home = {
  En: props => Base({ ...props, lang: "en" }),
  Jp: props => Base({ ...props, lang: "jp" }),
}

export default Home
