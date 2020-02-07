import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"

export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route component={Home} />
      </Switch>
    </Router>
  )
}

export default App
