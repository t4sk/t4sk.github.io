import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MultiSigWallet from "./pages/courses/MultiSigWallet"
import routes from "./pages/courses/MultiSigWallet/routes"

// TODO FIX scroll to top
export function App(props) {
  // TODO FIX SolidityMultiSigWallet main route
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {routes.map(({ path, component }, i) => (
          <Route path={path} component={component} key={i} />
        ))}
        <Route path="/courses/multi-sig-wallet" component={MultiSigWallet} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
