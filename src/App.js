import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
// TODO switch to posts.js
import Posts from "./pages/Blog/posts-bk"
import NotFound from "./pages/NotFound"

function createPostRoutes(posts) {
  return posts.map((post, i) => {
    return (
      <Route
        key={`${post.lang}-${i}`}
        exact
        path={`/${post.lang}/blog/${post.date}`}
        component={post.Component}
      />
    )
  })
}

// TODO not found
export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {createPostRoutes(Posts)}
        <Route exact path="/en/blog" component={Blog.En} />
        <Route exact path="/jp/blog" component={Blog.Jp} />
        {/* TODO ? render={props => <Contact {...props} lang="en" />}*/}
        <Route exact path="/en/contact" component={Contact.En} />
        <Route exact path="/jp/contact" component={Contact.Jp} />
        <Route exact path="/en" component={Home.En} />
        <Route exact path="/jp" component={Home.Jp} />
        <Redirect exact from="/" to="/en" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
