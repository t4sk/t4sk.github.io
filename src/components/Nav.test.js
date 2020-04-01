import React from "react"
import { shallow } from "enzyme"
import { Nav } from "./Nav"

const props = {
  location: {
    pathname: "/",
    hash: "",
  },
}

test("it renders", () => {
  const component = shallow(<Nav {...props} />)

  expect(component).toMatchSnapshot()
})

test("tutorials active", () => {
  const component = shallow(
    <Nav {...props} location={{ ...props.location, hash: "#tutorials" }} />
  )

  expect(component).toMatchSnapshot()
})

test("about active", () => {
  const component = shallow(
    <Nav {...props} location={{ ...props.location, hash: "#about" }} />
  )

  expect(component).toMatchSnapshot()
})

test("contact active", () => {
  const component = shallow(
    <Nav {...props} location={{ ...props.location, hash: "#contact" }} />
  )

  expect(component).toMatchSnapshot()
})
