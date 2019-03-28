import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ title, description, lang, meta, keywords }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: ["smart contract", "solidity", "ethereum"],
  description: "Learn how to program smart contracts.",
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO
