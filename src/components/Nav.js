import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { Menu, Image } from "semantic-ui-react"
import { BACKGROUND_COLOR } from "../constants"
import logo from "./logo.svg"

export function Nav(props) {
  const { location } = props

  return (
    <Menu
      borderless
      fluid
      inverted
      fixed="top"
      style={{
        // boxShadow: "none",
        // borderBottom: "none",
        backgroundColor: BACKGROUND_COLOR,
      }}
      size="large"
    >
      <Menu.Item header as="a" href="/#top" style={{ padding: 0, width: 300 }}>
        <Image
          src={logo}
          style={{
            height: 48,
            backgroundColor: BACKGROUND_COLOR,
            margin: 5,
            borderRadius: 4,
          }}
          alt="logo"
        />
        Smart Contract Programmer
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          as="a"
          href="/#courses"
          active={location.hash === "#courses"}
        >
          Courses
        </Menu.Item>
        <Menu.Item as="a" href="/#about" active={location.hash === "#about"}>
          About
        </Menu.Item>
        <Menu.Item
          as="a"
          href="/#contact"
          active={location.hash === "#contact"}
        >
          Contact
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  }).isRequired,
}

export default withRouter(Nav)
