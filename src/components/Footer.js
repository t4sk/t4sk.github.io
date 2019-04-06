import React from "react"
import Container from "react-bootstrap/Container"
import GitHubSVG from "./GitHubSVG.svg"
import "./Footer.css"

export function Fotter(prop) {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer-row">
          <a
            className="Footer-github"
            href="https://github.com/t4sk"
            target="_blank"
          >
            <img src={GitHubSVG} alt="GitHub" />
            <span className="Footer-github-text">GitHub</span>
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Fotter
