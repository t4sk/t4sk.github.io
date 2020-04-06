import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SolidityMultiSigWallet from "./pages/tutorials/SolidityMultiSigWallet"
import ROUTES from "./pages/tutorials/SolidityMultiSigWallet/routes"

// TODO routes file
// TODO FIX scroll to top
// TODO rename tutorials to courses
export function App(props) {
  // TODO rename solidity-multi-sig-wallet to multi-sig-wallet

  // TODO FIX SolidityMultiSigWallet main route
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {ROUTES.map(({ path, component }, i) => (
          <Route path={path} component={component} key={i} />
        ))}
        <Route
          path="/tutorials/solidity-multi-sig-wallet"
          component={SolidityMultiSigWallet}
        />
        <Route component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
