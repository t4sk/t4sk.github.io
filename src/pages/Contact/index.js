import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./index.css"
import translate from "../../translate"
import LANG from "./index.lang"

const EMAIL = "smartcontractprogrammer@gmail.com"

function Base(props) {
  const { lang, children } = props

  const title = `${translate(
    LANG,
    lang,
    "Contact"
  )} | Smart Contract Programmer`
  return (
    <Layout lang={lang}>
      <SEO title={title} lang={lang} />
      <h3>{translate(LANG, lang, "Contact")}</h3>
      <div>smartcontractprogrammer@gmail.com</div>
    </Layout>
  )
}

Base.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

const Contact = {
  En: props => Base({ ...props, lang: "en" }),
  Jp: props => Base({ ...props, lang: "jp" }),
}

export default Contact
