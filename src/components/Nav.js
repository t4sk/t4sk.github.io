import React from "react"
import { Menu, Container, Image } from "semantic-ui-react"
import logo from "./logo.svg"

export function Nav(props) {
  return (
    <Menu
      borderless
      fluid
      fixed="top"
      style={
        {
          // boxShadow: "none",
          // borderBottom: "none",
        }
      }
      size="large"
    >
      <Container>
        <Menu.Item header as="a" href="/">
          <Image
            src={logo}
            style={{
              height: 24,
              backgroundColor: "#1b1c1d",
              margin: 5,
              borderRadius: 4,
            }}
            alt="logo"
          />
          Smart Contract Programmer
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as="a" href="/about">
            About
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

Nav.propTypes = {}

export default Nav
