import React from "react"
import PropTypes from "prop-types"
import { Segment } from "semantic-ui-react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./index.css"
import translate from "../../translate"
import LANG from "./index.lang"

function About(props) {
  const { lang } = props

  const title = `${translate(LANG, lang, "About")} | Smart Contract Programmer`
  return (
    <Layout lang={lang}>
      <SEO title={title} lang={lang} />
      <h1>{translate(LANG, lang, "About")}</h1>
      <div>
        contact<span>@</span>smartcontractprogrammer.com
      </div>
      <a
        href="https://twitter.com/ProgrammerSmart"
        target="__blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <br />
      <a
        href="https://github.com/t4sk"
        target="__blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </Layout>
  )
}

About.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

export default About
