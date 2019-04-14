import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Posts from "./pages/Blog/Posts"
import NotFound from "./pages/NotFound"

const postRoutes = Posts.map((post, i) => (
  <Route
    key={i}
    exact
    path={`/${post.lang}/blog/${post.date}`}
    component={post.component}
  />
))

export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {postRoutes}

        <Route
          exact
          path="/en/blog"
          render={props => <Blog {...props} lang="en" />}
        />
        <Route
          exact
          path="/jp/blog"
          render={props => <Blog {...props} lang="jp" />}
        />
        <Route
          exact
          path="/en/about"
          render={props => <About {...props} lang="en" />}
        />
        <Route
          exact
          path="/jp/about"
          render={props => <About {...props} lang="jp" />}
        />
        <Route
          exact
          path="/en"
          render={props => <Home {...props} lang="en" />}
        />
        <Route
          exact
          path="/jp"
          render={props => <Home {...props} lang="jp" />}
        />
        <Redirect exact from="/" to="/en" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
