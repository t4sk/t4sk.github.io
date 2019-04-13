import React from "react"
import PropTypes from "prop-types"
import { Segment } from "semantic-ui-react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./PostLayout.css"

function PostLayout(props) {
  const { lang, title, date, children } = props

  return (
    <Layout lang={lang}>
      <SEO title={`${title} | Smart Contract Programmer`} lang={lang} />
      <Segment>
        <div className="PostLayout">
          <h1>{title}</h1>
          <p>
            <em>{date}</em>
          </p>
          <hr />

          {children}
        </div>
      </Segment>
    </Layout>
  )
}

PostLayout.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PostLayout
