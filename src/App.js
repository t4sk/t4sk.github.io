import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

// import Blog from "./pages/Blog"
// import Posts from "./pages/Blog/Posts"
//
// const postRoutes = Posts.map((post, i) => (
//   <Route
//     key={i}
//     exact
//     path={`/${post.lang}/blog/${post.date}`}
//     component={post.component}
//   />
// ))
//
export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
