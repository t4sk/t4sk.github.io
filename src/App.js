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
import Languages from "./pages/Languages"

export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/languages" component={Languages} />
        {/* TODO en post imports */}
        <Route path="/en/blog" component={Blog.En} />
        {/* TODO hp post imports */}
        <Route path="/jp/blog" component={Blog.Jp} />
        <Route path="/en/about" component={About.En} />
        <Route path="/jp/about" component={About.Jp} />
        <Route path="/en" component={Home.En} />
        <Route path="/jp" component={Home.Jp} />
        <Redirect to="/en" />
      </Switch>
    </Router>
  )
}

export default App
