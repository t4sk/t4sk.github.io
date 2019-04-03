import React from "react"
import moment from "moment"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./index.css"
import Posts from "./posts-bk"

export function groupByYear(posts) {
  const grouped = posts.reduce((grouped, post) => {
    const year = moment(post.date).year()

    if (grouped[year]) {
      grouped[year].push(post)
    } else {
      grouped[year] = [post]
    }

    return grouped
  }, {})

  const years = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a))

  // sort posts by date desc
  for (let year of years) {
    grouped[year].sort((a, b) => moment(b.date).unix() - moment(a.date).unix())
  }

  return {
    years,
    byYear: grouped,
  }
}

function Base(props) {
  const { lang } = props

  const { years, byYear } = groupByYear(Posts.filter(post => post.lang == lang))

  return (
    <Layout lang={lang}>
      <SEO title="Blog | Smart Contract Programmer" lang={lang} />
      {years.map((year, i) => (
        <div key={i}>
          <h3>{year}</h3>
          <ul className="Blog-list">
            {byYear[year].map((post, j) => (
              <li key={j}>
                <div className="row">
                  <div className="Blog-date">{post.date}</div>
                  <a href={`/${lang}/blog/${post.date}`}>{post.title}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  )
}

Base.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

const Blog = {
  En: props => Base({ ...props, lang: "en" }),
  Jp: props => Base({ ...props, lang: "jp" }),
}

export default Blog
