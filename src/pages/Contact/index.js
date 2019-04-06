import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./index.css"
import translate from "../../translate"
import LANG from "./index.lang"

function Contact(props) {
  const { lang } = props

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

Contact.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

export default Contact
