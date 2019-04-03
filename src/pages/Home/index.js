import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

// TODO list most recent posts (both eng and jp)
function Home(props) {
  const { lang } = props

  return (
    <Layout lang={lang}>
      <SEO title="Smart Contract Programmer" lang={lang} />
      <div>{lang}</div>
    </Layout>
  )
}

Home.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

export default Home
