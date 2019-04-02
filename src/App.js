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
import Posts from "./pages/Blog/posts"

function createPostRoutes(Posts) {
  return Posts.map((post, i) => {
    return (
      <Route
        key={`${post.lang}-${i}`}
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
        <Route path="/en/blog" component={Blog.En} />
        <Route path="/jp/blog" component={Blog.Jp} />
        {/* TODO single component for both lang ? */}
        <Route path="/en/contact" component={Contact.En} />
        <Route path="/jp/contact" component={Contact.Jp} />
        <Route path="/en" component={Home.En} />
        <Route path="/jp" component={Home.Jp} />
        <Redirect to="/en" />
      </Switch>
    </Router>
  )
}

export default App
