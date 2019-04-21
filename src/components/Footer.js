import React from "react"
import { Container } from "semantic-ui-react"
import GitHub from "./GitHub.svg"
import "./Footer.css"

export function Footer(prop) {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer-row">
          <div className="Footer-col" />
          <div className="Footer-col">
            <a
              className="Footer-link"
              href="https://twitter.com/ProgrammerSmart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="Footer-link"
              href="https://github.com/t4sk"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="Footer-link"
              href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
