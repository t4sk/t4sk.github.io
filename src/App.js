import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LearnSolidityPage from "./pages/courses/LearnSolidityPage"

export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {/*}
        <Route path="/courses/learn-solidity" component={LearnSolidityPage} />
        */}
        <Route component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
