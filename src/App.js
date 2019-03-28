import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/about" component={About} />
        <Route component={Home} />
      </Switch>
    </Router>
  )
}

export default App
