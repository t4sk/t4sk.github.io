import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import "./index.css"
import Posts from "./posts-bk"

function Base(props) {
  const { lang } = props

  const posts = Posts.filter(post => post.lang == lang)

  return (
    <Layout lang={lang}>
      <SEO title="Blog | Smart Contract Programmer" lang={lang} />
      <ul className="Blog-list">
        {posts.map((post, i) => (
          <li key={i}>
            <div className="row">
              <div className="Blog-date">{post.date}</div>
              <a href={`/${lang}/blog/${post.date}`}>{post.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

const Blog = {
  En: props => Base({ ...props, lang: "en" }),
  Jp: props => Base({ ...props, lang: "jp" }),
}

export default Blog
