import React from "react"
import Container from "react-bootstrap/Container"
import GitHubSVG from "./GitHubSVG.svg"
import "./Footer.css"

export function Fotter(prop) {
  return (
    <footer className="Footer">
      <Container>
        <a href="https://github.com/t4sk" target="_blank">
          <img src={GitHubSVG} alt="GitHub" />
        </a>
      </Container>
    </footer>
  )
}

export default Fotter
