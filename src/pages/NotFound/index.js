import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./index.css"
import translate from "../../translate"
import LANG from "./index.lang"

function NotFound(props) {
  function getLang(props) {
    const { location } = props

    const [, lang] = location.pathname.split("/")

    return lang == "jp" ? "jp" : "en"
  }

  const lang = getLang(props)
  const title = `${translate(
    LANG,
    lang,
    "Not Found"
  )} | Smart Contract Programmer`

  return (
    <Layout lang={lang}>
      <SEO title={title} lang="en" />
      <div className="NotFound">
        <h1 className="NotFound-header">404</h1>
        <div className="NotFound-sub-header">
          {translate(LANG, lang, "Not Found")}
        </div>
      </div>
    </Layout>
  )
}

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default NotFound
