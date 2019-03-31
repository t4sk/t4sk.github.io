import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
// import About from "./pages/About"
import Languages from "./pages/Languages"

export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {/*}
        <Route path="/en/about" component={About.En} />
        <Route path="/jp/about" component={About.Jp} />
        <Route path="/blog" component={Blog} />
        */}
        <Route path="/languages" component={Languages} />
        <Route component={Home} />
      </Switch>
    </Router>
  )
}

export default App
