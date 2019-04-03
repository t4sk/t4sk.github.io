import React from "react"
import moment from "moment"
import PropTypes from "prop-types"
import Nav from "react-bootstrap/Nav"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./index.css"
import LANG from "./index.lang"
import translate from "../../translate"

// TODO switch to posts.js
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

function PostsByYear(props) {
  const { posts } = props

  const { years, byYear } = groupByYear(posts)

  return years.map((year, i) => (
    <div className="Blog-posts-by-year" key={i}>
      <h3>{year}</h3>
      <ul className="Blog-list">
        {byYear[year].map((post, j) => (
          <li key={j}>
            <div className="row">
              <div className="Blog-date">{post.date}</div>
              <a href={`/${post.lang}/blog/${post.date}`}>{post.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ))
}

function Blog(props) {
  const { lang } = props

  const title = `${translate(LANG, lang, "Blog")} | Smart Contract Programmer`

  return (
    <Layout lang={lang}>
      <SEO title={title} lang={lang} />
      <Tabs defaultActiveKey={lang} id="uncontrolled-tab-example">
        <Tab eventKey="en" title="English">
          <PostsByYear posts={Posts.filter(post => post.lang == "en")} />
        </Tab>
        <Tab eventKey="jp" title="Japanese">
          <PostsByYear posts={Posts.filter(post => post.lang == "jp")} />
        </Tab>
      </Tabs>
    </Layout>
  )
}

Blog.propTypes = {
  lang: PropTypes.oneOf(["en", "jp"]).isRequired,
}

export default Blog
