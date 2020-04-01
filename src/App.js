import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SolidityMultiSigWallet from "./pages/tutorials/SolidityMultiSigWallet"

// TODO routes file
// TODO FIX scroll to top
export function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
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
