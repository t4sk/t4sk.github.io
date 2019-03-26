import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import "./App.css"

export function App(props) {
  return (
    <div>
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/about" component={About} />
          <Route component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
